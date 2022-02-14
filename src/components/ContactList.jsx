import React from 'react';
import s from './Phone.module.css';

import {getFilterContacts} from "../Redux/phonebook/phonebook-selectors";
import { onDeletedContact } from "../Redux/phonebook/phonebook-actions";
import { useSelector, useDispatch } from 'react-redux';


export default function  СontactList () {

  const stateContacts = useSelector(state => getFilterContacts(state));
  const dispatch = useDispatch();
  const onDeleted = id => dispatch(onDeletedContact(id)); 

  return (
    <ul className={'js-list'}>
      {stateContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>
              +38 <a href={`tel: ${number}`}>{number}</a>
            </span>
            <button className={s.btnList} type="button" onClick={() => onDeleted(id)}>
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
}

