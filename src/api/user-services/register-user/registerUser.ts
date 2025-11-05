import logger from "../../../utils/logger"
import type { registerUserProps } from "../../../types/functions.types";
import { config } from "../../../config/envConfig";
import axiosClient from "../../../config/axiosClient";

const baseURL = config.VITE_API_URL;

export const registerUser = async (props: registerUserProps) => {
    try {
        await axiosClient.post(`${baseURL}/gateway/users/api/v1/user`, props.userDetails);
        props.setEmail('');
        props.setPassword('');
        props.navigate('/login');
    } catch (error) {
        logger.error(error);
    }
}