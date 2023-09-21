import axios from 'axios';
import { fetchContacts, fetchingError, fetchingSuccess } from './contactSlice';

axios.defaults.baseURL = 'https://650c93b347af3fd22f67d0a8.mockapi.io';

export const fetchContactsData = () => async dispatch => {
  try {
    // індикатор завантаження
    dispatch(fetchContacts());
    // HTTP-запит
    const response = await axios.get('/contacts');
    //   обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // обробка помилки
    dispatch(fetchingError(e.message));
  }
};
