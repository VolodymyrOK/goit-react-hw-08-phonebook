import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  StyledForm,
  StyledField,
  Button,
  ErrorMsg,
  Title,
} from './ContactsEntry.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { addContacts } from 'redux/contacts/contacts.operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /\d{3}-\d{3}-\d{4}/g,
      'Must contain only numbers or be in the correct format'
    )
    .required('Required'),
});

export const ContactsEntry = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);

  const onSubmitForm = (values, reset) => {
    const isDuplicated = list.find(
      item => item.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isDuplicated) return alert(values.name + ' is already in contacts');
    dispatch(addContacts(values));
    reset.resetForm();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmitForm}
      >
        <StyledForm>
          <Label htmlFor="username">Name</Label>
          <StyledField
            id="username"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="User name"
            required
          />
          <ErrorMsg name="name" component="span"></ErrorMsg>
          <Label htmlFor="usernumber">Number</Label>
          <StyledField
            id="usernumber"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Phone number in the format 123-456-7890"
            required
          />
          <ErrorMsg name="number" component="span"></ErrorMsg>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
