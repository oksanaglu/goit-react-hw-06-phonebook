import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    evt.preventDefault();

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in contacts.`);
    }

    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;