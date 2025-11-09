import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { logoutUserProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const logoutUser = async (props: logoutUserProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.post(`${baseURL}/gateway/users/api/v1/user/logout`);
    props.addAlert('Logout Successfully!', 'success');
    props.navigate('/');
    console.log(res.data);
  } catch (error) {
    logger.error(error);
    props.setIsLoading(false);
    logger.error('Something wrong with the logout');
    logger.error('Logout Failed');
  }
};
