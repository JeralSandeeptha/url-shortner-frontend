import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import type { updateLinkProps } from '../../../types/functions.types';
import axiosClient from '../../../config/axiosClient';
import { isAxiosError } from 'axios';

const baseURL = config.VITE_API_URL;

export const updateLink = async (props: updateLinkProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.put(
      `${baseURL}/gateway/urls/api/v1/url/${props.linkId}`,
      props.updateData
    );

    if (res.status === 202) {
      logger.info('Link updated successfully:', res.data);
      props.setIsLoading(false);
      props.setLink(res.data.data);
      props.addAlert('Link updated successfully!', 'success');
    } else {
      props.setIsLoading(false);
      switch (res.status) {
        case 400:
          props.addAlert('Invalid input. Please check your link details.', 'error');
          break;
        case 401:
          props.addAlert('You are not authorized. Please log in again.', 'error');
          break;
        case 403:
          props.addAlert('Access denied. You do not have permission.', 'error');
          break;
        case 404:
          props.addAlert('Link not found.', 'error');
          break;
        case 500:
          props.addAlert('Server error. Please try again later.', 'error');
          break;
        default:
          props.addAlert('Link update failed. Please try again.', 'error');
      }
    }
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);

    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          props.addAlert(
            error.response?.data?.message || 'Invalid link data. Please check your input.',
            'error'
          );
          break;
        case 401:
          props.addAlert('Unauthorized. Please log in again.', 'error');
          break;
        case 403:
          props.addAlert("Forbidden. You don't have access.", 'error');
          break;
        case 404:
          props.addAlert('Link not found.', 'error');
          break;
        case 500:
          props.addAlert('Internal server error. Try again later.', 'error');
          break;
        default:
          props.addAlert(error.response?.data?.message || 'Unexpected error occurred.', 'error');
      }
    } else {
      props.addAlert('Unexpected error. Please try again later.', 'error');
    }
  }
};
