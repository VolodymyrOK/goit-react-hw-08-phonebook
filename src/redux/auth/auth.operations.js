import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, setAuthHeader } from 'redux/fetchAPI';
import { MessageToast } from 'components/Messages/Messages';

//User

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', credentials);
      setAuthHeader(response.data.token);
      MessageToast('ok', 'Registration successfully');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Registration unsuccessfully');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/login', credentials);
      setAuthHeader(response.data.token);
      MessageToast('ok', 'Login successful');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Authorization failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
      MessageToast('ok', 'You are logged out');
    } catch (error) {
      MessageToast('error', 'Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (credentials, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      MessageToast('ok', 'The refresh was successful');
      return response.data;
    } catch (error) {
      MessageToast('error', 'Something went wrong. Invalid token');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
