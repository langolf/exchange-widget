import React from 'react';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';
import style from './CircleButton.module.css';

const CircleButton = props => {
  return (
    <Button className={style.root} {...props}>
      <span className={style.icon}>
        <Icon>{props.children}</Icon>
      </span>
    </Button>
  );
};

export default CircleButton;
