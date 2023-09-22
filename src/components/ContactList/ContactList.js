import { useDispatch, useSelector } from 'react-redux';
import {
  ContactButton,
  ListContact,
  ListEl,
  StyledSearchInput,
} from './ContactList.styled';
import { deleteContact, findContact } from 'redux/contactSlice';
import { filterSelector, itemsSelector } from 'redux/selectors';
import { deleteServerContact } from 'redux/operations';

export const ContactList = () => {
  const items = useSelector(itemsSelector);
    console.log(items)
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    console.log(contactId)
    dispatch(deleteServerContact(contactId))
      .then(() => {
        dispatch(deleteContact(contactId));
      })
      .catch(error => {
        console.error('Failed to delete contact from server', error);
      });
  }

  const handleChange = e => {
    const inputValue = e.target.value;
    dispatch(findContact(inputValue));

    if (filter && filter !== '') {
      items.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
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
        {items
          .filter(items =>
            items.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => (
           
            <ListEl key={item.id}>
              <p>{item.name}:</p>
              <p> {item.phoneNumber}</p>
              <ContactButton onClick={() => handleDelete(item.id)}>
                Delete
              </ContactButton>
            </ListEl>
          ))}
      </ListContact>
    </>
  );
};
