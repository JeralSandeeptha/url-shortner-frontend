import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import { isAxiosError } from 'axios';
import type { loginUserProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const loginUser = async (props: loginUserProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.post(
      `${baseURL}/gateway/users/api/v1/user/login`,
      props.userDetails
    );
    if (res.status === 202) {
      props.setEmail('');
      props.setPassword('');
      props.addAlert('Login Successfully!', 'success');
      logger.info(res.data);
      props.setAuthenticated(true);
      props.setLocalStorageItem('user-id', res.data.data.userId);
      props.setUser(res.data.data.userId);
      props.setIsLoading(false);
      props.navigate('/dashboard');
    } else {
      props.setIsLoading(false);
      logger.error('Something wrong with the login');
      switch (res.status) {
        case 400:
          props.addAlert('Invalid input. Please check your details.', 'error');
          break;
        case 401:
          props.addAlert('You are not authorized. Please log in again.', 'error');
          break;
        case 403:
          props.addAlert('Access denied. You do not have permission.', 'error');
          break;
        case 500:
          props.addAlert('Server error. Please try again later.', 'error');
          break;
        default:
          props.addAlert('Login Failed. Please try again.', 'error');
      }
    }
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);

    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          props.addAlert('Credentials are invalid.', 'error');
          break;
        case 401:
          props.addAlert('Unauthorized. Please log in again.', 'error');
          break;
        case 403:
          props.addAlert('Forbidden. You don’t have access.', 'error');
          break;
        case 500:
          props.addAlert('Internal server error. Try again later.', 'error');
          break;
        default:
          logger.error(error.message);
          props.addAlert(error.response?.data?.message || 'Unexpected error occurred.', 'error');
      }
    } else {
      props.addAlert('Unexpected error. Please try again later.', 'error');
    }
  }
};
