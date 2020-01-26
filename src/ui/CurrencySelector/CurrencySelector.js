import React, { useState, useRef, useDebugValue } from 'react';
import clsx from 'clsx';
import Selector from '../Selector/Selector.js';
import style from './CurrencySelector.module.css';
import currencyList from 'hooks/currencies';
import { useStore } from 'redhooks';
import uuid from 'uuid';
import AppModal from 'ui/AppModal/AppModal';
import Button from 'ui/Button/Button';

const CurrencySelector = ({ id, activeItem, currencyValue, balance, onChange, ...props }) => {
  const { state, dispatch } = useStore();
  const defaultCurrencyList = ['GBP', 'EUR', 'USD'];
  const [isOpened, setOpened] = useState(null);

  return (
    <div className={style.root}>
      <Selector
        activeItem={activeItem}
        list={Object.values(currencyList)}
        onMouseDown={event => {
          event.preventDefault();
          event.target.blur();
          window.focus();
          setOpened(true);
        }}
      />

      {isOpened && (
        <AppModal
          onRequestClose={() => {
            setOpened(false);
          }}
          isOpen={true}
        >
          <div className={style.dropdownContent}>
            <h3 className={style.dropdownLabel}>Choose currency:</h3>
            {
              <ul className={style.selectorList}>
                {defaultCurrencyList.map((entry, idx) => {
                  return (
                    <li
                      key={`${entry}-${idx}`}
                      onClick={() => {
                        onChange(entry);
                        setOpened(false);
                      }}
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
                  );
                })}
              </ul>
            }
            <div className={style.more}>
              <span className={style.moreIcon}>...</span>
              Other:
            </div>
          </div>

          <Button
            className={style.buttonCancel}
            onClick={e => {
              setOpened(false);
            }}
          >
            Cancel
          </Button>
        </AppModal>
      )}
    </div>
  );
};

export default CurrencySelector;
