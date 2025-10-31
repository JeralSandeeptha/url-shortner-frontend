import keycloak from '../config/keycloak';

export const moveToLogin = () => {
  keycloak.login();
};
