import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ _id, name, phone }) => {
        return (
          <Item key={_id}>
            <Text>
              {name}: {phone}
            </Text>
            <Button type="submit" onClick={() => dispatch(deleteContact(_id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
