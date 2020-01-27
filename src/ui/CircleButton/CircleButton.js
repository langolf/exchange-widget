import React from 'react';
import Icon from 'ui/Icon/Icon';
import style from './CircleButton.module.css';
import { Link } from 'react-router-dom';

const CircleButton = ({ title, children, icon, ...props }) => {
  const Tag = props.to !== undefined ? Link : 'div';

  return (
    <Tag className={style.root} {...props}>
      <span className={style.inner}>
        {icon && (
          <span className={style.icon}>
            <Icon>{children}</Icon>
          </span>
        )}

        {title && <p className={style.title}>{title}</p>}
      </span>
    </Tag>
  );
};

export default CircleButton;
