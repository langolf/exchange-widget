import React from 'react';

import style from './Button.module.css';

const Button = props => {
    const { type, children } = props;
    return (
        <button className={style.root} type={type} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
