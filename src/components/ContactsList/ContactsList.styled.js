import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: ${({ theme: { colors } }) => colors.colorH2};
  & > sup {
    font-size: 16px;
    color: blue;
    margin-left: 8px;
    font-weight: 700;
  }
`;
export const HeadContacts = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 14px;
`;
export const ContactList = styled.ul``;

export const MessageAboutEmpty = styled.div`
  font-weight: 500;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.colorErr};
`;
