import { createSlice } from '@reduxjs/toolkit';
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
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)

      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)

      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, state => {
        state.user = initStateAuth.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => state)

      .addCase(refreshUser.pending, (state, action) => state)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => state);
  },
});

export const authReducer = authSlice.reducer;
