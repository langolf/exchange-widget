import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ value, onChange, ...props }) => {
  return (
    <div className={styles.root}>
      <input
        value={value}
        type={props.type || 'text'}
        className={styles.input}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
