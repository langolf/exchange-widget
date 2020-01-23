import React, { useState, useRef, useDebugValue } from 'react';
import clsx from 'clsx';
import Selector from '../Selector/Selector.js';
import style from './CurrencyField.module.css';
import { CurrencyTypes, useAppContext } from 'hooks/app-context';
import CurrencyFieldInput from './CurrencyFieldInput';
import CurrencyFieldSelector from './CurrencyFieldSelector';

const CurrencyField = ({
  id,
  activeItem,
  value,
  balance,
  onCurrencyTypeChange,
  onCurrencyValueChange,
  ...props
}) => {
  const { state, dispatch } = useAppContext();
  return (
    <div className={style.root}>
      <div className={style.field}>
        <div className={style.fieldSelector}>
          <Selector
            key="selector"
            activeItem={activeItem}
            list={Object.values(CurrencyTypes)}
            dropdownContent={
              <ul className={style.selectorList}>
                {Object.keys(CurrencyTypes).map(entry => (
                  <li
                    key={entry}
                    onClick={event => {
                      onCurrencyTypeChange(entry);
                      dispatch({ type: 'MODAL_OPEN' });
                    }}
                    value={entry}
                  >
                    <span
                      className={clsx({
                        [style.flag]: true,
                        'currency-flag': true,
                        [`currency-flag-${entry.toLowerCase()}`]: true,
                      })}
                    ></span>
                    {entry}
                  </li>
                ))}
              </ul>
            }
            dropdownLabel="Choose currency:"
            dropdownMore="Other"
          />
        </div>

        <div className={style.fieldInput}>
          <CurrencyFieldInput onChange={onCurrencyValueChange} value={value} placeholder="0" />
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default CurrencyField;
