import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <Container>
        <h3>Find contacts by name</h3>
        <input
          onChange={e => this.props.changeHandler(e)}
          type="text"
          name="filter"
        />
      </Container>
    );
  }
}

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
