import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

export default function SearchFilter({ onStringChange }) {
  return (
    <form>
      <label className={css.label}>
        <input
          type="text"
          name="filterString"
          className={css.input}
          onChange={onStringChange}
          placeholder="Find contacts by name"
        ></input>
      </label>
    </form>
  );
}

SearchFilter.propTypes = {
  onStringChange: PropTypes.func.isRequired,
};
