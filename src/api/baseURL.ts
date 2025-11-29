import { config } from '../config/envConfig';

export const baseURL = config.VITE_API_URL || 'http://localhost:5000';