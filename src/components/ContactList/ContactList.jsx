import PropTypes from 'prop-types';

import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.length !== 0 ? (
        <ContactItem contacts={filterContacts} deleteContact={deleteContact} />
      ) : (
        <p>Please add contact</p>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
