import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { updateUserPreferencesProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const updateUerPreferences = async (props: updateUserPreferencesProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.patch(
      `${baseURL}/gateway/users/api/v1/user/${props?.user?.user_id}/preferences`,
      {
        productUpdates: props?.user?.productUpdates,
        securityAlerts: props?.user?.securityAlerts,
        weeklySummary: props?.user?.weeklySummary,
      }
    );
    logger.info(res.data);
    props.setIsLoading(false);
    props.addAlert('User preferences updated successfully', 'success');
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);
    props.addAlert('Failed to update user preferences', 'error');
  }
};
