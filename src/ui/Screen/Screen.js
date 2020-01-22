import React from 'react';
import style from './Screen.module.css';

const Screen = props => {
  return (
    <section className={style.root}>
      <header className={style.header}>
        <h1 className={style.title}>{props.title}</h1>
      </header>

      <div className={style.content} style={{ backgroundColor: '#F3F4F5' }}>
        {props.children}
      </div>
    </section>
  );
};

export default Screen;
