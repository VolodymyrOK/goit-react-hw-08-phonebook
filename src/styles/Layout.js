import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 450px;
  margin: 32px auto;
  padding: 15px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColor};
  border: 1px solid ${({ theme: { colors } }) => colors.colorText};
  border-radius: 8px;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
`;
