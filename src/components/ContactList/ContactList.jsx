import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getFilter, getContacts } from 'redux/selectors';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);

  const onDeleteContact = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;