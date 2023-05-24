import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactList.styled';

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  //const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="submit" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
