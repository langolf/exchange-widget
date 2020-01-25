import React, { useState } from 'react';
import clsx from 'clsx';
import style from './Input.module.css';

const Input = ({ value, onChange, className, styles, ...props }) => {
  return (
    <div
      className={clsx({
        [style.root]: true,
        [className]: true,
      })}
    >
      <input
        value={value}
        type={props.type || 'text'}
        className={style.input}
        onChange={onChange}
        style={props.styles}
        {...props}
      />
    </div>
  );
};

export default Input;
