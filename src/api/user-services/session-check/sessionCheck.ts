import axiosClient from '../../../config/axiosClient';
import { config } from '../../../config/envConfig';
import type { checkSessionProps } from '../../../types/functions.types';
import logger from '../../../utils/logger';
import { logoutWithoutNotify } from '../logout-user/logoutWithoutNotify';

const baseURL = config.VITE_API_URL;

export const sessionCheck = async (props: checkSessionProps) => {
  try {
    const res = await axiosClient.get(`${baseURL}/gateway/users/api/v1/user/session/check`);

    logger.info('Session check response received:', res.data);
    // Check if user is present in the response
    if (res.data.user) {
      props.setAuthenticated(true); // user exists → authenticated
      props.addAlert('Your session is verified', 'success');
    } else {
      props.setAuthenticated(false); // user is null → not authenticated
      logoutWithoutNotify({
        setIsLoading: props.setIsLoading,
        navigate: props.navigate,
        setAuthenticated: props.setAuthenticated,
        clearLocalStorageItem: props.clearLocalStorageItem,
      });
    }
  } catch (error) {
    logger.error(error);
    props.setAuthenticated(false);
    logoutWithoutNotify({
      setIsLoading: props.setIsLoading,
      navigate: props.navigate,
      setAuthenticated: props.setAuthenticated,
      clearLocalStorageItem: props.clearLocalStorageItem,
    });
  }
};
