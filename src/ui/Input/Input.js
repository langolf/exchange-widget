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
      <div className={style.inputFake}>{value}</div>
      <input value={value} type={props.type || 'text'} className={style.input} onChange={onChange} {...props} />
    </div>
  );
};

export default Input;
