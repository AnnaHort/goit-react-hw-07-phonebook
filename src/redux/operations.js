import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c93b347af3fd22f67d0a8.mockapi.io';



// Функція для отримання контакту з серверу--------------------------------------
export const getContactfromServer = async () => {
  try {
    const response = await axios.get('/contacts/contacts');
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error;
  }
}

// Створюємо async thunk за допомогою createAsyncThunk
export const fetchContactsData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactfromServer();
      return data;
    } catch (error) {
      throw error;
    }
  }
)




// Функція для відправлення контакту на сервер-----------------------------------------------------------------------
export const sendContactToServer = async contactData => {
  try {
    const response = await axios.post('/contacts/contacts', contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Створюємо async thunk за допомогою createAsyncThunk
export const sendContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const data = await sendContactToServer(contactData);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

