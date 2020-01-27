import React from 'react';
import clsx from 'clsx';

import style from './Button.module.css';

const Button = ({ children, className, isDisabled, type, ...props }) => {
  return (
    <button
      className={clsx({
        [style.button]: true,
        [className]: true,
        [style.isDisabled]: isDisabled,
      })}
      type={type || 'button'}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
