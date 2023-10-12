import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Container, Copyright, Footer, Header } from './LayoutApp.styled';

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
        <Copyright>&copy; Phone Book, 2023</Copyright>
      </Footer>
    </Container>
  );
};
