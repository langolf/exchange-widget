import React from 'react';
import style from './Screen.module.css';
import { Link } from 'react-router-dom';

const Screen = props => {
  return (
    <section className={style.root}>
      <header className={style.header}>
        <Link to="/">Back</Link>
        <h1 className={style.title}>{props.title}</h1>
      </header>

      <div className={style.content} style={{ backgroundColor: '#F3F4F5' }}>
        {props.children}
      </div>
    </section>
  );
};

export default Screen;
