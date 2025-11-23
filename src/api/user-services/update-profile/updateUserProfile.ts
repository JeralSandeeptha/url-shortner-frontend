import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { updateSecurityProps } from '../../../types/functions.types';

const baseURL = config.VITE_API_URL;

export const updateUserProfile = async (props: updateSecurityProps) => {
  props.setIsLoading(true);
  try {
    const res = await axiosClient.patch(
      `${baseURL}/gateway/users/api/v1/user/${props?.user?.user_id}/profile`,
      {
        image: props?.user?.image,
        timeZone: props?.user?.timeZone,
        firstName: props?.user?.firstName,
        lastName: props?.user?.lastName,
        biography: props?.user?.biography,
      }
    );
    logger.info(res.data);
    props.setIsLoading(false);
    props.addAlert('Your profile details updated successfully', 'success');
  } catch (error: unknown) {
    logger.error(error);
    props.setIsLoading(false);
    props.addAlert('Failed to update user profile details', 'error');
  }
};
