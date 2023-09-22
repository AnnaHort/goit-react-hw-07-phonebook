import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { QuizForm } from './QuizForm/QuizForm';
import { fetchContactsData } from 'redux/operations';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  
  return (
    <SectionContainer>
      <QuizForm />
      <ContactList />
      <GlobalStyle />
    </SectionContainer>
  );
};
