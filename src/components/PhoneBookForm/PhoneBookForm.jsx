import { Formik, ErrorMessage } from 'formik';
import { Button, WholeForm, Label, Input } from './PhoneBookForm.styled';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const phoneCheck =
  /^(([\\+]*[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),

  number: Yup.string()
    .matches(
      phoneCheck,
      'Phone number must be min 4 digits. Can contain spaces, dashes and start with +'
    )
    .required('Phone number is required'),
});

const PhoneBookForm = ({ onSubmit, contacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const haveName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (haveName) {
      alert(`${values.name} is already in the contact list`);
      return;
    }

    onSubmit({
      ...values,
    });
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        <WholeForm>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Phone
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </WholeForm>
      </Formik>
    </>
  );
};

export default PhoneBookForm;

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
