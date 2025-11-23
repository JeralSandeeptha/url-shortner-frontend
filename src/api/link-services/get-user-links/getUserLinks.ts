import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { getUserLinksProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const getUserLinks = async (props: getUserLinksProps) => {
  try {
    const res = await axiosClient.get(
      `${baseURL}/gateway/urls/api/v1/url/${props.userId}/getmyurls`
    );
    logger.info(res.data);
    props.setLinks(res.data.data);
  } catch (error: unknown) {
    logger.error(error);
  }
};
