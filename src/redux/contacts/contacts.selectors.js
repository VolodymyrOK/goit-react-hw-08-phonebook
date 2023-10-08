import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filter.selectors';

export const selectContacts = state => state.contacts.list;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
