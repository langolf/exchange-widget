import React from 'react';
import style from './Screen.module.css';
import { Link } from 'react-router-dom';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconClose } from './icon-close.svg';

const Screen = ({ hasCloseAction = true, onClickClose, closeNavElement = false, title, children, styles }) => {
  return (
    <section className={style.root} style={styles}>
      <header className={style.header}>
        {closeNavElement || (
          <div className={style.closeElement}>
            <Link to="/">
              <Icon>
                <IconClose />
              </Icon>
            </Link>
          </div>
        )}
        <h1 className={style.title}>{title}</h1>
      </header>

      <div className={style.content}>{children}</div>
    </section>
  );
};

export default Screen;
