import React from 'react';
import style from './Screen.module.css';
import { Link } from 'react-router-dom';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconClose } from './icon-close.svg';

const Screen = props => {
  return (
    <section className={style.root} style={props.styles}>
      <header className={style.header}>
        <div className={style.close} onClick={props.onClickClose}>
          <Icon>{props.closeIcon || <IconClose />}</Icon>
        </div>
        <h1 className={style.title}>{props.title}</h1>
      </header>

      <div className={style.content}>{props.children}</div>
    </section>
  );
};

export default Screen;
