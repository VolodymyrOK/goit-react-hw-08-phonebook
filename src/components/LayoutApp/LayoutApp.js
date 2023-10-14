import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import {
  Container,
  CopyrightLink,
  CopyrightWrapper,
  Footer,
  Header,
} from './LayoutApp.styled';
import { HomePage } from 'components/App';

export const LayoutApp = () => {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <CopyrightWrapper>
          &copy;&nbsp;
          <CopyrightLink component={HomePage} to="/">
            Phone Book, {new Date().getFullYear()}
          </CopyrightLink>
        </CopyrightWrapper>
      </Footer>
    </Container>
  );
};
