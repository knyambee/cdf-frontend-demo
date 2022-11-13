import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const login = (onAuthenticatedCallback) => {
  keycloakInstance
    .init({ onLoad: "login-required" })
    .then(function (authenticated) {
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        alert("Not authenticated");
      }
      localStorage.setItem("bearer-token", keycloakInstance.token);
      localStorage.setItem("username", keycloakInstance.tokenParsed.name);
      localStorage.setItem("userId", keycloakInstance.subject);

    })
    .catch((e) => {
      console.dir(e);
      console.log("keycloak init exception: ".concat(e));
    });
};

// Logout
const logout = keycloakInstance.logout;

// Get username of logged in user
const getUsername = () => keycloakInstance.tokenParsed?.preferred_username;

// Check admin/user role
const hasRole = (roles) =>
  roles.some((role) => keycloakInstance.hasRealmRole(role));

const AuthService = {
  login,
  getUsername,
  logout,
  hasRole,
};

export default AuthService;
