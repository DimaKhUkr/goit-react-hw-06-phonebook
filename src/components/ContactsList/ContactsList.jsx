// import PropTypes from 'prop-types';
import { Box, Btn, ListBox } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/AddContactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const lowCaseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );
  return (
    <ListBox>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Box key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Btn onClick={() => dispatch(deleteContact(id))} type="button">
              Прощай контакт насовсем
            </Btn>
          </Box>
        );
      })}
    </ListBox>
  );
};

// ContactsList.propTypes = {
//   onClickDelBtn: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired).isRequired
//   ).isRequired,
// };
