import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <input
        onChange={e => this.props.changeHandler(e)}
        type="text"
        name="filter"
      />
    );
  }
}
