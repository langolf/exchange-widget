import React from 'react';
import style from './Selector.module.css';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';

const Selector = ({ activeItem, onChange, list, ...props }) => {
  return (
    <div className={style.root}>
      <select value={activeItem} onChange={onChange} className={style.control} {...props}>
        {list.map(({ code }) => (
          <option value={code} key={code}>
            {code}
          </option>
        ))}
      </select>

      <div className={style.icon}>
        <IconArrow />
      </div>
    </div>
  );
};

export default Selector;
