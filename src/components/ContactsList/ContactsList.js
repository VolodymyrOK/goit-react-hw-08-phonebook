import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import {
  ContactList,
  ContactListItem,
  DelButton,
  HeadContacts,
  MessageAboutEmpty,
  Title,
} from './ContactsList.styled';
import { delContacts } from 'redux/contacts/contacts.operations';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/contacts.selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
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
      <ContactList>
        {contacts.length === 0 ? (
          <MessageAboutEmpty>No entries to display</MessageAboutEmpty>
        ) : (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <span>
                <DelButton
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure?'))
                      dispatch(delContacts(id));
                  }}
                >
                  Delete
                </DelButton>
              </span>
            </ContactListItem>
          ))
        )}
      </ContactList>
    </>
  );
};
