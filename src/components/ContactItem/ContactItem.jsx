import { Item, Text, Button } from './ContactItem.styled';


const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;