import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 468px) {
    gap: 36px;
  }
`;

export const AuthMenuLink = styled(NavLink)`
  /* width: 92px; */
  text-align: center;
  padding: 8px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  border-radius: 8px;
  transition: scale 150ms ease-in, background-color 250ms ease-in,
    color 250ms ease-in;
  &:hover {
    background-color: white;
    color: RoyalBlue;
  }
  &:active {
    background-image: radial-gradient(
      ellipse closest-corner at 50% 50%,
      rgba(0, 0, 0, 0) 39.4%,
      rgba(0, 0, 255, 0.58) 100%
    );
    scale: 0.98;
  }
  @media screen and (max-width: 468px) {
    padding: 4px 16px;
  }
`;
