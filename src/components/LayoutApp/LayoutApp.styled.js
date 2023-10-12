import styled from 'styled-components';
import background from 'images/funart.jpg';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  &:before {
    content: '';
    background-image: linear-gradient(
        rgba(106, 191, 235, 0),
        rgba(106, 191, 235, 1)
      ),
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }
`;

export const Header = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  height: 72px;
  background-color: RoyalBlue;
  border-radius: 8px;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
`;

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 72px;
  display: flex;
  padding: 24px;
  background-color: RoyalBlue;
  border-radius: 8px;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
`;

export const Copyright = styled.div`
  margin: 0 auto;
  color: white;
`;
