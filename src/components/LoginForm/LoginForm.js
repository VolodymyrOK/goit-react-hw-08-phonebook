import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import {
  Button,
  ErrorMsg,
  FormWrapper,
  Label,
  StyledField,
  StyledForm,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, reset) => {
    dispatch(logIn(values));
    reset.resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
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
          <Button type="submit">Log In</Button>
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};
