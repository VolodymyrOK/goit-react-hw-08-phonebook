import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { Greeting, UserButton, UserMenuNav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuNav>
      <Greeting>Welcome, {user.name}</Greeting>
      <UserButton type="button" onClick={handleLogOut}>
        Logout
      </UserButton>
    </UserMenuNav>
  );
};
