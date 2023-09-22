import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};


const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        items => items.id !== action.payload
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