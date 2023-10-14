import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MessageToast } from 'components/Messages/Messages';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', value);
      MessageToast('ok', 'Contact added');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Failed to add contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContacts = createAsyncThunk(
  'contacts/delContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      MessageToast('ok', 'Contact deleted');
      return id;
    } catch (error) {
      MessageToast('error', 'Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ changeValues, id }, thunkAPI) => {

    try {
      const response = await axios.patch(`/contacts/${id}`, changeValues);
      MessageToast('ok', 'Data change successfully');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Failed to change contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
