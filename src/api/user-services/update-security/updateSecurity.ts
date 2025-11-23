import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { updateSecurityProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const updateUserSecurity = async (props: updateSecurityProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.patch(
      `${baseURL}/gateway/users/api/v1/user/${props?.user?.user_id}/security`,
      {
        twoFactorAuth: props?.user?.twoFactorAuth,
      }
    );
    logger.info(res.data);
    props.setIsLoading(false);
    props.addAlert('User security updated successfully', 'success');
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);
    props.addAlert('Failed to update user security', 'error');
  }
};
