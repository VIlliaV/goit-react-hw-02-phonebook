import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      <ContactItem contacts={filterContacts} deleteContact={deleteContact} />
    </ul>
  );
};
