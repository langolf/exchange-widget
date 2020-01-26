import React from 'react';
import clsx from 'clsx';

import style from './Button.module.css';

const Button = ({ children, className, isDisabled, ...props }) => {
  return (
    <button
      className={clsx({
        [style.button]: true,
        [className]: true,
        [style.isDisabled]: isDisabled,
      })}
      type={props.type || 'button'}
      disabled={isDisabled}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
