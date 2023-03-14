import PropTypes from 'prop-types';
import { Button } from './Contact.styled';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
