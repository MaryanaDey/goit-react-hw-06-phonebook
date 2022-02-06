import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

// import types from "./phonebook-types";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.onDeleted]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.veluesFilter]: (_, { payload }) => payload,
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
//   console.log(payload);
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "phonebook/veluesFilter":
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({
  contacts,
  filter,
});
