import { Component } from 'react';

import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  render() {
    return (
      <Form onSubmit={e => this.props.addNewUser(e)}>
        <p>Name</p>
        <input
          onChange={e => this.props.changeHandler(e)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          onChange={e => this.props.changeHandler(e)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add User</button>
      </Form>
    );
  }
}
