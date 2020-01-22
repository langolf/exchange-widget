import React, { useState, useRef, useDebugValue } from "react";
import Selector from "../Selector/Selector.js";
import style from "./CurrencyField.module.css";
import { CurrencyTypes, useAppContext } from "hooks/app-context";
import CurrencyFieldInput from "./CurrencyFieldInput";

const CurrencyField = ({
  activeItem,
  value,
  balance,
  onCurrencyTypeChange,
  onCurrencyValueChange
}) => {
  const { state, dispatch } = useAppContext();

  return (
    <div className={style.root}>
      <div className={style.field}>
        <div className={style.fieldSelector}>
          <Selector
            onChange={onCurrencyTypeChange}
            activeItem={activeItem}
            list={Object.values(CurrencyTypes)}
          />
        </div>

        <div className={style.fieldInput}>
          <CurrencyFieldInput
            onChange={onCurrencyValueChange}
            value={value}
            placeholder="0"
          />
        </div>
      </div>

      <div className={style.status}>
        <div className={style.balance}>
          <span>Balance: </span>
          {CurrencyTypes[activeItem].sign}
          {balance}
        </div>

        <div className={style.message}>
          <span>not enough funds</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyField;
