import styled from 'styled-components';

export const UserMenuNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const UserButton = styled.button`
  width: 92px;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  &:hover {
    background-color: white;
    color: RoyalBlue;
  }
  @media screen and (max-width: 468px) {
    padding: 2px;
  }
`;

export const Greeting = styled.p`
  color: white;
`;
