import styled from 'styled-components';
import { Form, Field, ErrorMessage} from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #1d1d1d;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 20em;
`;

export const Button = styled.button`
  margin: 16px auto;
  padding: 4px;
  width: 10em;
  border: 1px solid blue;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.bgColorBtn};
  cursor: pointer;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  transition: color 150ms ease-in, background-color 150ms ease-in,
    scale 150ms ease-in;
  &:is(:hover, :focus) {
    outline: none;
    color: ${({ theme: { colors } }) => colors.colorBtnHover};
    background-color: ${({ theme: { colors } }) => colors.bgColorBtnHover};
  }
  &:active {
    scale: 0.95;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.colorErr};
`;
