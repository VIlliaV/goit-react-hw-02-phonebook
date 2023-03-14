import { Component } from 'react';

import { Item } from './ContactItem.styled';

export class ContactItem extends Component {
  render() {
    const contacts = this.props.contacts;
    return contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <span></span>
        <p className="name">{name}: </p>
        <p> {number}</p>
        <button onClick={() => this.props.deleteContact(id)}>Delete</button>
      </Item>
    ));
  }
}
