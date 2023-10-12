import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './auth.operations';

const initStateAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initStateAuth,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = initStateAuth.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

const extraActions = [logIn, register];
const getActions = type => extraActions.map(action => action[type]);

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const authReducer = authSlice.reducer;
