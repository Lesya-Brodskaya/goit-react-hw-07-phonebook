import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading, getError } from 'redux/selectors';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, Phonebook, Contacts } from './App.styled';

const App = () => {
  const dispatch = useDispatch;
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Contacts>Contacts</Contacts>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {isError && <p>{isError}</p>}
      <ContactList />
    </Container>
  );
};

export default App;
