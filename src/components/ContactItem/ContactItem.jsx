import { Component } from 'react';

import { Item } from './ContactItem.styled';

export class ContactItem extends Component {
  state = {
    del: '',
  };
  deleteItem = id => {
    this.setState({ del: id });
    setTimeout(() => {
      this.props.deleteContact(id);
    }, 300);
  };

  render() {
    const { id, name, number } = this.props.contact;
    const delId = this.state.del;

    return (
      <Item className={id === delId ? 'delete' : ''}>
        <span></span>
        <p className="name">{name}: </p>
        <p> {number}</p>
        <button
          onClick={() => {
            this.deleteItem(id);
          }}
        >
          Delete
        </button>
      </Item>
    );
  }
}
