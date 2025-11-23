import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import type { redirectProps } from '../../../types/functions.types';
import axios from 'axios';

const baseURL = config.VITE_API_URL;

export const redirect = async (props: redirectProps) => {
  try {
    const res = await axios.get(`${baseURL}/gateway/redirects/api/v1/redirect/${props.shortId}`);
    logger.info('Redirection response received:', res.data);
    if (res.data.statusCode === 202) {
      const longUrl = res.data.data.long_url;
      window.location.href = longUrl;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        props.navigate('/url/forbidden');
      } else {
        console.error('Axios error:', error.message);
      }
    } else {
      console.error('Unknown error', error);
    }
  }
};
