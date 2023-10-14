import styled from 'styled-components';

export const TitleH1 = styled.h1`
  margin-top: 24px;
  text-align: center;
  font-size: 28px;
  color: ${({ theme: { colors } }) => colors.colorH1};
`;

export const ContactsInfo = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  gap: 48px;

  @media screen and (max-width: 767px) {
    max-width: 500px;
    flex-direction: column;
    margin: 0 auto;
  }
`;
