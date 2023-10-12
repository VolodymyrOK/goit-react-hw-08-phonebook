import { Helmet } from 'react-helmet';
import { TitleH1 } from './HomePage.styled';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <TitleH1>Phonebook welcome page</TitleH1>
    </>
  );
}
