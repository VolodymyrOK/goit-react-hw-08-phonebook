import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Container, Footer, Header } from './LayoutApp.styled';

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
      <Footer>&copy; Phone Book, 2023</Footer>
    </Container>
  );
};
