import React from 'react';
import Icon from 'ui/Icon/Icon';
import style from './CircleButton.module.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const CircleButton = ({ title, children, icon, isDisabled, ...props }) => {
  const Tag = props.to !== undefined ? Link : 'div';

  return (
    <Tag
      className={clsx({
        [style.root]: true,
        [style.isDisabled]: isDisabled,
      })}
      {...props}
    >
      <span className={style.inner}>
        {icon && (
          <span className={style.icon}>
            <Icon>{icon}</Icon>
          </span>
        )}

        {title && <p className={style.title}>{title}</p>}
      </span>
    </Tag>
  );
};

export default CircleButton;
