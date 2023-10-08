import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  delContacts,
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
        state.list.push(action.payload); //first way
        // state.list = [...state.list, action.payload];  //second way
      })
      .addCase(delContacts.fulfilled, (state, action) => {
        const idx = state.list.findIndex(
          contact => contact.id === action.payload
        );
        state.list.splice(idx, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
    // Second way
    // .addMatcher(isPendingAction, state => handlePending(state))
    // .addMatcher(isFulfilledAction, state => handleFulfilled(state))
    // .addMatcher(isRejectedAction, (state, action) =>
    //   handleRejected(state, action))
  },
});

export const contactsReducer = contactSlice.reducer;

const extraActions = [fetchContacts, addContacts, delContacts];
const getActions = type => extraActions.map(action => action[type]);

// Second way
// const isPendingAction = action => action.type.endsWith('pending');
// const isFulfilledAction = action => action.type.endsWith('fulfilled');
// const isRejectedAction = action => action.type.endsWith('rejected');

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
