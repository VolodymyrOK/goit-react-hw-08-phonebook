import styled from 'styled-components';

export const AppBarNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 468px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
