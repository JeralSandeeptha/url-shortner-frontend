import keycloak from '../config/keycloak';

export const moveToRegister = async () => {
  keycloak.register();
};
