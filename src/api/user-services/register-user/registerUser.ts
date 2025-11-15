import logger from '../../../utils/logger';
import type { registerUserProps } from '../../../types/functions.types';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import { isAxiosError } from 'axios';

const baseURL = config.VITE_API_URL;

export const registerUser = async (props: registerUserProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.post(`${baseURL}/gateway/users/api/v1/user`, props.userDetails);
    if (res.status === 201) {
      props.setEmail('');
      props.setPassword('');
      props.setIsLoading(false);
      props.addAlert('Account Created Successfully!', 'success');
      props.navigate('/login');
    } else {
      props.setIsLoading(false);
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
          props.addAlert('Account not created. Please try again.', 'error');
      }
    }
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);

    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          props.addAlert('Email already exists.', 'error');
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
          props.addAlert(error.response?.data?.message || 'Unexpected error occurred.', 'error');
      }
    } else {
      props.addAlert('Unexpected error. Please try again later.', 'error');
    }
  }
};
