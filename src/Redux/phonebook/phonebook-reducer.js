import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, onDeletedContact, veluesFilter } from './phonebook-actions';

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [onDeletedContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [veluesFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
