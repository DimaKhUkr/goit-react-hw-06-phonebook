import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
// import contacts from '../Data/contacts';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
