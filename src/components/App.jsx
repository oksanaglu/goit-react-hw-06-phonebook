import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container, Title1, Title2 } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Title1>Phonebook</Title1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      <Title2>Your Contacts</Title2>
      <Filter />
      <ContactList />
    </Container>
  );
};




