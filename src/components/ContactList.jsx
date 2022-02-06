import React from 'react';
//import PropTypes from 'prop-types';
import s from './Phone.module.css';
import { connect } from "react-redux";
import phonebookActions from "../Redux/phonebook/phonebook-actions";


const  СontactList = ({ contactList, onDeleted }) =>  {
  return (
    <ul className={'js-list'}>
      {contactList.map(({ id, name, number }) => {
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


const getFilterContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contactList: getFilterContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookActions.onDeleted(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(СontactList);

//СontactList.propTypes = {
 // contactList: PropTypes.arrayOf(
  //  PropTypes.shape({
    //  id: PropTypes.string.isRequired,
     // name: PropTypes.string.isRequired,
     // number: PropTypes.string.isRequired,
    //}),
  //),
  //onDeleted: PropTypes.func.isRequired,
//};