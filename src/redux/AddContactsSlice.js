import { createSlice } from '@reduxjs/toolkit';

const AddContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [action.payload, ...state],

    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, deleteContact } = AddContactsSlice.actions;
export const contactsReducer = AddContactsSlice.reducer;
