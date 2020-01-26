import React, { useState, useRef, useDebugValue } from 'react';
import clsx from 'clsx';
import Selector from '../Selector/Selector.js';
import style from './CurrencySelector.module.css';
import currencyList from 'hooks/currencies';
import { useStore } from 'redhooks';

const CurrencySelector = ({
  id,
  activeItem,
  currencyValue,
  balance,
  onCurrencyTypeChange,
  onCurrencyValueChange,
  ...props
}) => {
  const { state, dispatch } = useStore();
  const defaultCurrencyList = ['GBP', 'EUR', 'USD'];

  return (
    <div
      className={style.root}
      onClick={() => {
        dispatch({ type: 'MODAL', isOpen: true });
      }}
    >
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
  );
};

export default CurrencySelector;
