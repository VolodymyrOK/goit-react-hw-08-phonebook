import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';

export const LayoutApp = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>&copy; Phone Book, 2023</footer>
    </>
  );
};
