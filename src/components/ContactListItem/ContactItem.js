import { useDispatch } from 'react-redux';
import {
  ContactItemLi,
  DelButton,
  DelButtonSpan,
  UpdateButton,
} from './ContactItem.styled';
import { delContacts } from 'redux/contacts/contacts.operations';
import { useState } from 'react';
import { BasicModal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <ContactItemLi key={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <span>
        <UpdateButton type="button" onClick={toggleModal}>
          Edit
        </UpdateButton>
      </span>
      <DelButtonSpan>
        <DelButton
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure?')) dispatch(delContacts(id));
          }}
        >
          Delete
        </DelButton>
      </DelButtonSpan>
      {isOpen && (
        <BasicModal
          isOpen={isOpen}
          name={name}
          number={number}
          id={id}
          onClose={toggleModal}
        />
      )}
    </ContactItemLi>
  );
};
