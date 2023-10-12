import { Navigate } from 'react-router-dom';
import page404 from 'images/404.jpg';
import { IoCaretBackSharp } from 'react-icons/io5';
import { Img, LinkBack } from './NotFoundPage.styled';

const NotFound = () => {
  return (
    <>
      <LinkBack to="/">
        <IoCaretBackSharp />
        Back
      </LinkBack>
      <Img src={page404} alt="Page not found" />
      <Navigate to="404.html" />
    </>
  );
};

export default NotFound;
