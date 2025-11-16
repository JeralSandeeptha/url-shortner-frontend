import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { resetPasswordProps } from '../../../types/functions.types';
import { isAxiosError } from 'axios';

const baseURL = config.VITE_API_URL;

export const resetPassword = async (props: resetPasswordProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.patch(
      `${baseURL}/gateway/users/api/v1/user/${props.userId}/reset-password`,
      {
        email: props.email,
        currentPassword: props.currentPassword,
        newPassword: props.newPassword,
      }
    );
    logger.info(res.data);

    if (res.data.statusCode === 404) {
      props.setIsLoading(false);
      props.addAlert('User not found', 'error');
    }

    if (res.status === 401) {
      props.setIsLoading(false);
      props.addAlert('Currrent password is wrong', 'error');
    }

    props.setIsLoading(false);
    props.addAlert('Password has been updated. Please relogin to confirm', 'success');
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 400) {
        props.setIsLoading(false);
        props.addAlert('Current password is wrong', 'error');
        return;
      }

      if (status === 401) {
        props.setIsLoading(false);
        props.addAlert('You are not authenticated', 'error');
        return;
      }

      if (status === 404) {
        props.setIsLoading(false);
        props.addAlert('User not found', 'error');
        return;
      }
    }
    logger.error(error);
    props.setIsLoading(false);
    props.addAlert('Failed to update password. Please try again later', 'error');
  }
};
