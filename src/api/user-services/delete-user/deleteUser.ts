import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { deleteUserProps } from '../../../types/functions.types';
import { logoutUser } from '../logout-user/logoutUser';

const baseURL = config.VITE_API_URL;

export const deleteUser = async (props: deleteUserProps) => {
  try {

    const res = await axiosClient.delete(`${baseURL}/gateway/users/api/v1/user/${props.userId}`);
    if (res.status === 204) {
        logoutUser({
            addAlert: props.addAlert,
            navigate: props.navigate,
            setAuthenticated: props.setAuthenticated,
            setIsLoading: props.setIsLoading,
            clearLocalStorageItem: props.clearLocalStorageItem,
        });
        props.addAlert('Your account has been deleted', 'success');
        props.addAlert('You are loggedout', 'success');
    } else {
        props.addAlert('User deletion failed', 'error');
    }

  } catch (error: unknown) {
    logger.error(error);
    props.addAlert('User deletion server error', 'error');
  }
};