import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  addNewUser = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newUser = {
      id: nanoid(),
      name,
      number,
    };
    this.props.updateContacts(newUser);
    e.target.reset();
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Form onSubmit={this.addNewUser}>
        <p>Name</p>
        <input
          onChange={this.changeHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          onChange={this.changeHandler}
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

ContactForm.propTypes = {
  updateContacts: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
