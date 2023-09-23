import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c93b347af3fd22f67d0a8.mockapi.io';

// отримання даних
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

// додавання нового контакту
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

// видалення
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
