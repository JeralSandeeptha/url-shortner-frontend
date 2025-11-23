import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { getSingleUserProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const getSingleUser = async (props: getSingleUserProps) => {
  try {
    const res = await axiosClient.get(`${baseURL}/gateway/users/api/v1/user/${props.userId}`);
    logger.info(res.data);
    props.setUserDetails(res.data.data);
  } catch (error: unknown) {
    logger.error(error);
  }
};
