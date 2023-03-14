import { Component } from 'react';
import { GlobalStyles } from '../GlobalStyles';
import { nanoid } from 'nanoid';
import PhoneBookForm from '../PhoneBookForm';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import Layout from '../Layout';
import { Title, Title2 } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterContacts = contactName => {
    const contacts = this.state.contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(contactName)
    );
  };

  getFilteredName = filterName => {
    this.setState({ filter: filterName });
  };

  addContact = values => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    console.log(newContact);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    console.log('deleteContact', contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const data = this.state;

    return (
      <Layout>
        <Title>My phonebook</Title>
        <PhoneBookForm onSubmit={this.addContact} contacts={data.contacts} />

        <Title2>My contacts</Title2>
        <Filter onFilter={this.getFilteredName} value={data.filter} />
        <ContactsList
          contacts={
            data.filter ? this.filterContacts(data.filter) : data.contacts
          }
          onDelete={this.deleteContact}
        />

        <GlobalStyles />
      </Layout>
    );
  }
}

export default App;
