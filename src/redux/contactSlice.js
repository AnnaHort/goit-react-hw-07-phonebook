import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsData } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
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
      state.filter = action.payload;
    },
    fetchContacts(state) {
      state.isLoading = true;
    },
  },
   // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsData.fulfilled, (state, action) => {
        state.contacts.items = action.payload; // Оновлення даних з серверу
        state.contacts.isLoading = false;
      })
      .addCase(fetchContactsData.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});
// експортуємо генератори екшенів та редюсер:
export const { addContact, deleteContact, findContact, fetchContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
