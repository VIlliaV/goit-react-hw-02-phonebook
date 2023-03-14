import { Component } from 'react';

import { Item } from './ContactItem.styled';

export class ContactItem extends Component {
  state = {
    del: '',
  };
  deleteItem = id => {
    this.setState({ del: id });
  };

  render() {
    const contacts = this.props.contacts;

    return contacts.map(({ id, name, number }) => (
      <Item key={id} className={id === this.state.del ? 'delete' : ''}>
        <span></span>
        <p className="name">{name}: </p>
        <p> {number}</p>
        <button
          onClick={() => {
            this.deleteItem(id);
            setTimeout(() => {
              this.props.deleteContact(id);
            }, 300);
          }}
        >
          Delete
        </button>
      </Item>
    ));
  }
}
