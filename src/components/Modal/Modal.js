import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  ChakraProvider,
} from '@chakra-ui/react';
import { SignupSchema } from 'components/ContactsEntry/ContactsEntry';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeContact } from 'redux/contacts/contacts.operations';
import { ModalBlockBtn } from './Modal.styled';
import { ErrorMsg } from 'components/ContactsEntry/ContactsEntry.styled';
import { selectContacts } from 'redux/contacts/contacts.selectors';

export const BasicModal = ({ isOpen, name, number, onClose, id }) => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);

  const handleUpdate = (changeValues, reset) => {
    const isDuplicated = list.find(
      item =>
        item.name.toLowerCase() === changeValues.name.toLowerCase() &&
        item.id !== id
    );
    if (isDuplicated)
      return alert(changeValues.name + ' is already in contacts');
    dispatch(changeContact({ changeValues, id }));
    onClose();
    reset.resetForm();
  };

  return (
    <>
      <ChakraProvider>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Formik
                initialValues={{
                  name,
                  number,
                }}
                validationSchema={SignupSchema}
                onSubmit={handleUpdate}
              >
                <Form autoComplete="true">
                  <VStack spacing={5} m="auto" align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="name" color="brand.900">
                        Name
                      </FormLabel>
                      <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="User name"
                        size="lg"
                        variant="outline"
                        focusBorderColor="brand.600"
                      />
                      <ErrorMsg name="name" component="span"></ErrorMsg>
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="number" color="brand.900">
                        Phone number
                      </FormLabel>
                      <Field
                        as={Input}
                        id="number"
                        name="number"
                        placeholder="Phone number in the format 123-456-7890"
                        _placeholder={{ color: 'brand.300' }}
                        size="lg"
                        variant="outline"
                        focusBorderColor="brand.600"
                      />
                      <ErrorMsg name="number" component="span"></ErrorMsg>
                    </FormControl>
                  </VStack>
                  <ModalBlockBtn>
                    <Button type="submit" colorScheme="blue" mr={3}>
                      Update contact
                    </Button>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalBlockBtn>
                </Form>
              </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};
