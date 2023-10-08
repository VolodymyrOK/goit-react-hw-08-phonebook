import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';

export const App = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && !error && <Loader />}
      {error && (
        <p style={{ textAlign: 'center', color: 'red', fontWeight: '500' }}>
          {error}
        </p>
      )}
      <ContactsEntry />
      {list.length > 0 && <ContactsList />}
      <GlobalStyle />
    </Layout>
  );
};
