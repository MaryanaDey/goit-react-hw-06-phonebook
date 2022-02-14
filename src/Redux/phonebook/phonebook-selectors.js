import { createSelector } from '@reduxjs/toolkit';

export const getContactList = state => state.phonebook.contacts;
export const getContactFilter = state => state.phonebook.filter;

export const getFilterContacts = createSelector(
  [getContactList, getContactFilter],

  (allContacts, filter) => {
    //const normalizeFilter = filter;
    const contactsFilter = allContacts.filter(contact => contact);
    return contactsFilter;
  },
);
