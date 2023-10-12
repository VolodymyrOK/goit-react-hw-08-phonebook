import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AuthMenuLink = styled(NavLink)`
  width: 92px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  &:hover {
    background-color: white;
    color: RoyalBlue;
  }
`;
