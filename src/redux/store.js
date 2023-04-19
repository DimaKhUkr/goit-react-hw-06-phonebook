import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './AddContactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
