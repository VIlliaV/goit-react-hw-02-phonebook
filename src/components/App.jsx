import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addNewUser = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;

    if (contacts.find(option => option.name === name)) {
      alert(`${name} already in contact`);
      return;
    }
    const newUser = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
    e.target.reset();
  };
  deleteContact = id => {
    console.log('id :>> ', id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          addNewUser={this.addNewUser}
          changeHandler={this.changeHandler}
        />
        <h2>Contacts</h2>
        <Filter changeHandler={this.changeHandler} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
