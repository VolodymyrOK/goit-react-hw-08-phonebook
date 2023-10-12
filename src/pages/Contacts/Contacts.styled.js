import styled from 'styled-components';

export const ContactsInfo = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const TitleH1 = styled.h1`
  margin-top: 12px;
  text-align: center;
  font-size: 28px;
  color: ${({ theme: { colors } }) => colors.colorH1};
`;
