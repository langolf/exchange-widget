import React, { useState, useRef, useDebugValue } from 'react';
import clsx from 'clsx';
import Selector from '../Selector/Selector.js';
import style from './CurrencyField.module.css';
import { useAppContext } from 'hooks/app-context';
import currencyList from 'hooks/currencies';
import CurrencyFieldInput from './CurrencyFieldInput';
import CurrencyFieldSelector from './CurrencyFieldSelector';

const CurrencyField = ({
  id,
  activeItem,
  currencyValue,
  balance,
  onCurrencyTypeChange,
  onCurrencyValueChange,
  ...props
}) => {
  const { state, dispatch } = useAppContext();
  const defaultCurrencyList = ['GBP', 'EUR', 'USD'];

  return (
    <div className={style.root}>
      <div className={style.field}>
        <div className={style.fieldSelector}>
          <Selector
            key="selector"
            activeItem={activeItem}
            list={Object.values(currencyList)}
            dropdownLabel="Choose currency:"
            dropdownMore="Other"
            dropdownContent={
              <ul className={style.selectorList}>
                {defaultCurrencyList.map(entry => (
                  <li
                    key={`${entry}`}
                    onClick={event => {
                      onCurrencyTypeChange(entry);
                      dispatch({ type: 'MODAL', isOpen: false });
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
          />
        </div>

        <div className={style.fieldInput}>
          <CurrencyFieldInput className={style.input} onChange={onCurrencyValueChange} placeholder="0" />
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default CurrencyField;
