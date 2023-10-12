import { AuthMenuLink, AuthMenuNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthMenuNav>
      <AuthMenuLink to="/register">Register</AuthMenuLink>
      <AuthMenuLink to="/login">Login</AuthMenuLink>
    </AuthMenuNav>
  );
};
