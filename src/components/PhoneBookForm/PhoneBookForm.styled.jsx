import styled from 'styled-components';
import { Form, Field } from 'formik';

export const WholeForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  margin-left: 10px;
  padding: 2px 6px;
`;

export const Button = styled.button`
  width: 240px;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #a665e0;
  font-weight: 500;
  font-size: 24px;
  margin: 0 auto;
`;
