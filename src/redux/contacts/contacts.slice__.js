import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  delContacts,
} from 'redux/contacts/contacts.operations';

const isPendingAction = action => {
  return action.type.endsWith('pending');
};
const isFulfilledAction = action => {
  return action.type.endsWith('fulfilled');
};
const isRejectedAction = action => {
  return action.type.endsWith('rejected');
};

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
        state.list.push(action.payload); //first way
        // state.list = [...state.list, action.payload];  //second way
      })
      .addCase(delContacts.fulfilled, (state, action) => {
        const idx = state.list.findIndex(
          contact => contact.id === action.payload
        );
        state.list.splice(idx, 1);
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isFulfilledAction, state => {
        state.isLoading = false;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
