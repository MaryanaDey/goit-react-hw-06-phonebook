import React from 'react';
//import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Phone.module.css';

import phonebookActions from "../Redux/phonebook/phonebook-actions";
import { connect } from "react-redux";

function SearchContact({ value, searchContact }) {
  const id = shortid.generate();

  return (
    <div className={s.containerSearch}>
      <label htmlFor={id} className={s.labelSearch}>
        Поиск контактов по имени
      </label>
      <input
        type="tex"
        name="filter"
        value={value}
        onChange={searchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}


const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  searchContact: (e) => dispatch(phonebookActions.veluesFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);


//SearchContact.propTypes = {
 // value: PropTypes.string.isRequired,
  //SearchContact: PropTypes.func.isRequired,
//};
