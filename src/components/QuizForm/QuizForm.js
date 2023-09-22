import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { AddContactBtn, Container, InputEl, StyledForm } from './QuizForm.styled';
import { addContact } from 'redux/contactSlice';
import { itemsSelector } from 'redux/selectors';

export const QuizForm = () => {
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    console.log(newName)
    const newPhoneNumber = form.elements.contacts.value; 
    console.log(newPhoneNumber)

    const contactData = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: nanoid(),
    };

    if (contactData.name !== '' && contactData.phoneNumber !== '') {
      const contactExists = items.some(
        item =>
        item.name === contactData.name &&
        item.phoneNumber === contactData.phoneNumber
      );

      if (!contactExists) {
        dispatch(addContact(contactData));
        form.reset();
      } else {
        form.reset();
        alert('This contact already exists in your phonebook.');
      }
    } else {
      
      alert('Please enter both Name and Number');
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <StyledForm onSubmit={handleFormSubmit}>
        <ul>
          <Container>
            <p>Name:</p>
            <InputEl
              name="name"
              placeholder="add new name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Container>
          <Container>
            <p>Number:</p>
            <InputEl
              name="contacts"
              placeholder="add new number"
              pattern="\+?[0-9\s\-\(\)]+"
            />
          </Container>
          <li>
            <AddContactBtn>Add contact</AddContactBtn>
          </li>
        </ul>
      </StyledForm>
    </>
  );
};
