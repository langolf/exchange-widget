import React, { useState } from 'react';
import clsx from 'clsx';
import style from './Input.module.css';

const Input = ({ value, onChange, className, styles, valuePrefix, ...props }) => {
  return (
    <div
      className={clsx({
        [style.root]: true,
        [className]: true,
      })}
    >
      <input size={1} onChange={onChange} type={props.type || 'text'} className={style.input} {...props} />
    </div>
  );
};

export default Input;
