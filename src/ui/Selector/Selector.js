import React from "react";
import style from "./Selector.module.css";
import { ReactComponent as IconArrow } from "./icon-arrow-down.svg";

const Selector = props => {
  return (
    <div className={style.root}>
      <select className={style.control} name="asda" id="">
        <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
      </select>

      <div className={style.icon}>
        <IconArrow />
      </div>
    </div>
  );
};

export default Selector;
