import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { ContactsEntry } from 'components/ContactsEntry/ContactsEntry';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import { ContactsInfo, TitleH1 } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <TitleH1>Phonebook</TitleH1>
      <ContactsInfo>
        <ContactsEntry />
        <ContactsList />
      </ContactsInfo>
    </>
  );
}
