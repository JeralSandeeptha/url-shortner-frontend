import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import type { getLinkProps } from '../../../types/functions.types';
import axios from 'axios';

const baseURL = config.VITE_API_URL;

export const getLink = async (props: getLinkProps) => {
  try {
    const res = await axios.get(`${baseURL}/gateway/urls/api/v1/url/${props.linkId}`);
    props.setLink(res.data.data);
    logger.info(res.data);
  } catch (error) {
    logger.error(error);
  }
};
