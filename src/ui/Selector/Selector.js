import React, { useState } from 'react';
import style from './Selector.module.css';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';
import { useStore } from 'redhooks';

const Selector = ({ activeItem, isActive, onChange, list, ...props }) => {
  const { state, dispatch } = useStore();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={style.root}>
      <select value={activeItem} className={style.control} {...props}>
        {list.map(({ id }) => (
          <option value={id} key={`${id}`}>
            {id}
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
