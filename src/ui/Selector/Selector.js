import React, { useState } from "react";
import style from "./Selector.module.css";
import { ReactComponent as IconArrow } from "./icon-arrow-down.svg";

const Selector = ({ activeItem, onChange, list }) => {
  return (
    <div className={style.root}>
      <select value={activeItem} onChange={onChange} className={style.control}>
        {Object.keys(list).map(item => (
          <option value={list[item]} key={item}>
            {item}
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
