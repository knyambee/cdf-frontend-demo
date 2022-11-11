import AuthService from "./AuthService";

const RenderOnRole = ({ roles, children }) => {
  if (!AuthService.hasRole(roles)) return null;

  return children;
};

export default RenderOnRole;
