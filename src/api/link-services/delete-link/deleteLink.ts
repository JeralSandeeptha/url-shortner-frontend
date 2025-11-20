import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import type { deleteLinkProps } from '../../../types/functions.types';
import axiosClient from '../../../config/axiosClient';

const baseURL = config.VITE_API_URL;

export const deleteLink = async (props: deleteLinkProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.delete(`${baseURL}/gateway/urls/api/v1/url/${props.linkId}`);
    logger.info(res.data);
    props.setIsLoading(false);
    if (!props.skipNavigation) {
      props.navigate('/dashboard/links');
    }
    props.addAlert('Your URL has been deleted', 'success');
  } catch (error) {
    logger.error(error);
    props.setIsLoading(false);
    props.addAlert('Something went wrong!', 'error');
    throw error; // Re-throw to allow caller to handle
  }
};
