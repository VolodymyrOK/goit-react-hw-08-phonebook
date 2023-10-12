import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import {
  Button,
  ErrorMsg,
  FormWrapper,
  Label,
  StyledField,
  StyledForm,
} from './RegisterForm.styled';
import { Formik } from 'formik';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ username, email, password }, reset) => {
    dispatch(
      register({
        name: username,
        email: email,
        password: password,
      })
    );
    reset.resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label htmlFor="username">Username</Label>
          <StyledField
            id="username"
            type="text"
            name="username"
            title="Username"
            placeholder="Username"
            required
          />
          <ErrorMsg name="username" component="span"></ErrorMsg>
          <Label htmlFor="email">Email</Label>
          <StyledField
            id="email"
            type="text"
            name="email"
            title="Email"
            placeholder="E-mail"
            required
          />
          <ErrorMsg name="email" component="span"></ErrorMsg>
          <Label htmlFor="password">Password</Label>
          <StyledField
            id="password"
            type="password"
            name="password"
            title="Password"
            placeholder="Password"
            required
          />
          <ErrorMsg name="password" component="span"></ErrorMsg>
          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};
