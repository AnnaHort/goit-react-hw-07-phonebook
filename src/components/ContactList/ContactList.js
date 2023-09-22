import { useDispatch, useSelector } from 'react-redux';
import { ContactButton, ListContact, ListEl, StyledSearchInput } from './ContactList.styled';
import { deleteContact, findContact } from 'redux/contactSlice';
import { contactSelector, errorSelector, filterSelector, isLoadingSelector, itemsSelector } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactSelector);
  console.log(contacts);
  const items = useSelector(itemsSelector);
  console.log(items);
  const filter = useSelector(filterSelector);
  console.log(filter);
  const isLoading = useSelector(isLoadingSelector);
  console.log(isLoading);
  const error = useSelector(errorSelector)
  console.log(error);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };


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
          .map(items => (
            <ListEl key={items.id}>
              <p>{items.name}:</p>
              <p> {items.phoneNumber}</p>
              <ContactButton onClick={() => handleDelete(items.id)}>Delete</ContactButton>
            </ListEl>
          ))}
      </ListContact>
    </>
  );
};
