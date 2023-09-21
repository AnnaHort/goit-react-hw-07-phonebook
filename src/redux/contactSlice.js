import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    findContact(state, action) {
        state.filter = action.payload
    },
  },
});
// експортуємо генератори екшенів та редюсер:
export const { addContact, deleteContact, findContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
