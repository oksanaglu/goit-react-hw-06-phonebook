import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container, Section, Title1, Title2 } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const [filter, setFilter] = useState('');


  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(contacts => [...contacts, newContact]);
  };

 

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getContacts();

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);
    if (parsetContacts) {
      setContacts(parsetContacts);
    } else {
      return;
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    return (
     
          <Container>
        <Section title="Phonebook">
          <Title1>Phonebook</Title1>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Title2>Contacts</Title2>
          <Filter value={filter} onChange={handleFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}/>
        </Section>
      </Container>
   
    )
};

