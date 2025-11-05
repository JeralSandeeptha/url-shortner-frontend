import logger from '../../../utils/logger';
import type { registerUserProps } from '../../../types/functions.types';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';

const baseURL = config.VITE_API_URL;

export const registerUser = async (props: registerUserProps) => {
  try {
    const res = await axiosClient.post(`${baseURL}/gateway/users/api/v1/user`, props.userDetails);
    if (res.status === 201) {
      props.setEmail('');
      props.setPassword('');
      props.navigate('/login');
      props.addAlert('Account Created Successfully', 'success');
    } else {
      props.addAlert('Account not created.', 'error');
    }
  } catch (error) {
    logger.error(error);
    props.addAlert('Please try again later', 'error');
  }
};
