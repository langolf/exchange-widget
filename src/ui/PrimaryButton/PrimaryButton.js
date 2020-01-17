import React from 'react';
import Button from '../Button/Button.js';
import style from './PrimaryButton.module.css';

const PrimaryButton = props => (
    <Button className={style.root} {...props}>
        {props.text}
    </Button>
);

export default PrimaryButton;
