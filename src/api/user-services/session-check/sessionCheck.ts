import axiosClient from '../../../config/axiosClient';
import { config } from '../../../config/envConfig';
import type { checkSessionProps } from '../../../types/functions.types';
import logger from '../../../utils/logger';

const baseURL = config.VITE_API_URL;

export const sessionCheck = async (props: checkSessionProps) => {
  try {
    const res = await axiosClient.get(`${baseURL}/gateway/users/api/v1/user/session/check`);
    // Check if user is present in the response
    if (res.data.user) {
      props.setAuthenticated(true); // user exists → authenticated
    } else {
      props.setAuthenticated(false); // user is null → not authenticated
    }
  } catch (error) {
    logger.error(error);
    props.setAuthenticated(false);
  }
};
