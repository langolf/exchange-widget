import React, { useState, useRef, useDebugValue } from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input.js";
import Selector from "../Selector/Selector.js";
import style from "./CurrencyField.module.css";
import { CurrencyTypes } from "../../enum.js";

const CurrencyField = ({
  activeItem,
  value,
  balance,
  onCurrencyTypeChange,
  onCurrencyValueChange
}) => {
  return (
    <div className={style.root}>
      <div className={style.field}>
        <div className={style.fieldSelector}>
          <Selector
            onChange={onCurrencyTypeChange}
            activeItem={activeItem}
            list={CurrencyTypes}
          />
        </div>

        <div className={style.fieldInput}>
          <Input onChange={onCurrencyValueChange} value={value} />
        </div>
      </div>

      <div className={style.status}>
        <div className={style.balance}>
          <span>Balance: </span>
          <span></span>
          {balance}
        </div>

        <div className={style.message}>
          <span>not enough funds</span>
        </div>
      </div>
    </div>
  );
};

// todo: create global enums
CurrencyField.propTypes = {
  type: PropTypes.oneOf(Object.keys(CurrencyTypes)),
  balance: PropTypes.number
};

export default CurrencyField;
