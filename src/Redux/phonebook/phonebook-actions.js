import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      number,
      name,
    },
  };
});

export const onDeletedContact = createAction('phonebook/deletedContact');

export const veluesFilter = createAction('phonebook/veluesFilter');
