const isProduction = import.meta.env.MODE === 'production';

const getEnv = (key: string): string | undefined => {
  if (isProduction) {
    return window._env_?.[key];
  } else {
    return import.meta.env[key as keyof ImportMetaEnv];
  }
};

export const config = {
  VITE_API_URL: getEnv('VITE_API_URL') || 'http://localhost:5000',
  MODE: getEnv('MODE') || 'production',
};
