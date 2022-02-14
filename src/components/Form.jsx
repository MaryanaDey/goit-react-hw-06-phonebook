import { useState } from 'react';

import shortid from 'shortid';
import s from './Phone.module.css';

import { useDispatch, useSelector } from "react-redux";
import  {getContactList} from "../Redux/phonebook/phonebook-selectors";

import { addContact } from '../Redux/phonebook/phonebook-actions';
export default function Form() {
  const [newName, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(getContactList);

  const InputValue = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContacts = (e) => {
    e.preventDefault();

    const lengthInputNameChech = newName.length;
    const lengthInputNumberChech = number.length;

    if (lengthInputNameChech < 2 || lengthInputNumberChech > 10) {
      alert('Введите имя больше 1-го символам и не больше 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert('Введите номер больше 7 и меньше 10');
      return;
    }

    onSubmit( newName, number, state);
    resetInputvalues();
  };

  const resetInputvalues = () => {
    setName('');
    setNumber('');
  };

  const onCheckName = (contactList, newNameF) => {
    return contactList.some(({ newName }) => newName === newNameF);
  }

  const onSubmit = (newName, number, contactList) => {
    if (onCheckName(contactList, newName)) {
      alert('Это имя существует ');
      return;
    }
    dispatch(addContact(newName, number));
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();

  return (
    <form className={s.form} onSubmit={addContacts}>
      <label htmlFor={idName} className={s.labelName}>
        Name
      </label>

      <input
        id={idName}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        name="name"
        value={newName}
        placeholder="Name"
        onChange={InputValue}
        autoComplete="off"
      />

      <label htmlFor={idNumber} className={s.labelNumber}>
        Number
      </label>

      <input
        id={idNumber}
        type="number"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        placeholder="(0xx) xxx-xx-xx"
        onChange={InputValue}
        autoComplete="off"
      />

      <button type="submite" className={s.btnForm}>
        Add contact
      </button>
    </form>
  );
}

