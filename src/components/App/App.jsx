import { useState, useEffect } from 'react';
import { GlobalStyles } from '../GlobalStyles';
import { nanoid } from 'nanoid';
import PhoneBookForm from '../PhoneBookForm';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import Layout from '../Layout';
import { Title, Title2 } from './App.styled';

const getContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return [];
};

export default function App() {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredName = filterName => {
    setFilter(filterName);
  };

  const filterContacts = contactName => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(contactName)
    );
  };

  const addContact = values => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    console.log(newContact);

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    console.log('deleteContact', contactId);
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <Title>My phonebook</Title>
      <PhoneBookForm onSubmit={addContact} contacts={contacts} />

      <Title2>My contacts</Title2>
      <Filter onFilter={getFilteredName} value={filter} />
      <ContactsList
        contacts={filter ? filterContacts(filter) : contacts}
        onDelete={deleteContact}
      />

      <GlobalStyles />
    </Layout>
  );
}
