import Contact from 'components/Contact';
import PropTypes from 'prop-types';
import { Item, List } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
