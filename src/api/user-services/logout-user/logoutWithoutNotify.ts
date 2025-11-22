import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { logoutWithoutNotifyProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const logoutWithoutNotify = async (props: logoutWithoutNotifyProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.post(`${baseURL}/gateway/users/api/v1/user/logout`);
    if (res.data.statusCode === 202) {
      props.setIsLoading(false);
      //   props.navigate('/');
      props.setAuthenticated(false);
      props.clearLocalStorageItem('user-id');
      logger.info(res.data);
    }
  } catch (error) {
    logger.error(error);
    props.setIsLoading(false);
    logger.error('Something wrong with the logout');
    logger.error('Logout Failed');
  }
};
