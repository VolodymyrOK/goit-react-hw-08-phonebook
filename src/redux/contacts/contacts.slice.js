import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  delContacts,
  updateContacts,
} from 'redux/contacts/contacts.operations';

const initState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(delContacts.fulfilled, (state, action) => {
        const idx = state.list.findIndex(
          contact => contact.id === action.payload
        );
        state.list.splice(idx, 1);
      })
      .addCase(updateContacts.fulfilled, (state, action) => {
        console.log(action.payload);
      })

      .addMatcher(isPendingAction, state => handlePending(state))
      .addMatcher(isFulfilledAction, state => handleFulfilled(state))
      .addMatcher(isRejectedAction, (state, action) =>
        handleRejected(state, action)
      );
  },
});

export const contactsReducer = contactSlice.reducer;

const isPendingAction = action => action.type.endsWith('pending');
const isFulfilledAction = action => action.type.endsWith('fulfilled');
const isRejectedAction = action => action.type.endsWith('rejected');

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = state => {
  state.isLoading = false;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
