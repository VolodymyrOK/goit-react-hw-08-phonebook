import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 8px;
  display: flex;
  gap: 4px;
`;

export const NavigationLink = styled(NavLink)`
  width: 92px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  &:hover {
    background-color: white;
    color: RoyalBlue;
  }
`;
