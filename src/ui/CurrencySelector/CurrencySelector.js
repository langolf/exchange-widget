import React, { useState, useRef, useDebugValue } from 'react';
import Selector from '../Selector/Selector.js';
import style from './CurrencySelector.module.css';
import currencyList from 'helpers/currencies';
import CurrencySelectorPopover from './CurrencySelectorPopover.js';

const CurrencySelector = ({ id, activeItem, onChange, ...props }) => {
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

      {isOpened && <CurrencySelectorPopover onClose={() => setOpened(false)} onChange={onChange} />}
    </div>
  );
};

export default CurrencySelector;
