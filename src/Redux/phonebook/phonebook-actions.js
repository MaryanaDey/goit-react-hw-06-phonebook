import types from './phonebook-types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const onDeleted = createAction('phonebook/deletedContact');

// const onDeleted = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const veluesFilter = createAction('phonebook/veluesFilter');

// const veluesFilter = (value) => ({
//   type: types.VALUES_FILTER,
//   payload: value,
// });

export default { addContact, onDeleted, veluesFilter };
