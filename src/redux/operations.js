import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c93b347af3fd22f67d0a8.mockapi.io';

// Створюємо async thunk за допомогою createAsyncThunk
export const fetchContactsData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/contacts');

      return  response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Створюємо async thunk за допомогою createAsyncThunk
export const sendContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts/contacts', contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Створюємо async thunk за допомогою createAsyncThunk
export const deleteServerContact = createAsyncThunk(
  'contacts/deleteContact',
  async (deleteContactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/contacts/contacts/${deleteContactId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
