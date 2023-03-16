import PropTypes from 'prop-types';

import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
