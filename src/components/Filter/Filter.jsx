import PropTypes from 'prop-types';
import { Container } from './Filter.styled';

export const Filter = ({ changeHandler }) => {
  return (
    <Container>
      <h3>Find contacts by name</h3>
      <input onChange={e => changeHandler(e)} type="text" name="filter" />
    </Container>
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
