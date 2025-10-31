import 'keycloak-js';

declare module 'keycloak-js' {
  interface KeycloakInstance {
    didInitialize?: boolean;
  }
}
