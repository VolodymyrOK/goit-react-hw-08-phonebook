import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import {
  ContactContainer,
  ContactList,
  HeadContacts,
  MessageAboutEmpty,
  Title,
} from './ContactsList.styled';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/contacts.selectors';
import { ContactItem } from 'components/ContactListItem/ContactItem';

export const ContactsList = () => {
  const list = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactContainer>
      <HeadContacts>
        <Title>
          Contacts
          <sup>
            {contacts.length === list.length
              ? `${list.length}`
              : `${contacts.length}/${list.length}`}
          </sup>
        </Title>
        <Filter />
      </HeadContacts>
      {contacts.length === 0 && (
        <MessageAboutEmpty>Phonebook is empty</MessageAboutEmpty>
      )}
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem id={id} name={name} number={number} />
        ))}
      </ContactList>
    </ContactContainer>
  );
};
