import { AuthMenuLink, AuthMenuWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthMenuWrapper>
      <AuthMenuLink to="/register">Register</AuthMenuLink>
      <AuthMenuLink to="/login">Login</AuthMenuLink>
    </AuthMenuWrapper>
  );
};
