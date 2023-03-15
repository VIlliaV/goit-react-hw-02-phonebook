import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  addNewUser = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newUser = {
      id: nanoid(),
      name,
      number,
    };
    if (this.props.updateContacts(newUser)) {
      this.reset();
    } else {
      alert(`${name} already in contact`);
    }
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.addNewUser}>
        <label>
          Name
          <input
            onChange={this.changeHandler}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.changeHandler}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add User</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  updateContacts: PropTypes.func.isRequired,
};
