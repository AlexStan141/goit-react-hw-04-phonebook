import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name: name, number: number });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className={css.input}
          placeholder="Name*"
          required
        ></input>
      </label>
      <label className={css.label}>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          className={css.input}
          placeholder="Number*"
          required
        ></input>
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
