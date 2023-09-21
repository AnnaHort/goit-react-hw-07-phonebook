import { useDispatch, useSelector } from 'react-redux';
import { ContactButton, ListContact, ListEl, StyledSearchInput } from './ContactList.styled';
import { deleteContact, findContact } from 'redux/contactSlice';
import { contactSelector, filterSelector } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactSelector);
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };


  const handleChange = e => {
    const inputValue = e.target.value;
    dispatch(findContact(inputValue));

    if (filter && filter !== '') {
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  };

  return (
    <>
      <h2>Contacts</h2>
      <StyledSearchInput
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleChange}
      />
      <ListContact>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ListEl key={contact.id}>
              <p>{contact.name}:</p>
              <p> {contact.phoneNumber}</p>
              <ContactButton onClick={() => handleDelete(contact.id)}>Delete</ContactButton>
            </ListEl>
          ))}
      </ListContact>
    </>
  );
};
