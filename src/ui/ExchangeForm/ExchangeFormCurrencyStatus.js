import React, { useState, useEffect } from 'react';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';
import { useStore } from 'redhooks';
import clsx from 'clsx';

const ErrorMessageCode = {
  EXCEED: { type: 'WARNING', text: 'exceeds balance' },
  BELOW_MIN: { type: 'ERROR', text: 'Minimum amount is $0.10' },
};

const ExchangeFormCurrencyStatus = ({ field, hasAttentionInfo }) => {
  const { state } = useStore();
  const { currency, errorCode } = field;
  const { balance } = state.userPocket.vault[currency];
  const { currencySymbol } = currencyList[currency];
  const [hasError, setHasErrorState] = useState(false);

  useEffect(() => {
    setHasErrorState(errorCode !== null);
  }, [errorCode]);

  return (
    <div
      className={clsx({
        [style.currencyStatus]: true,
        [style.hasError]: hasError,
      })}
    >
      <div className={style.balance}>
        <span>Balance: </span>
        {currencySymbol}
        {balance}
      </div>

      {errorCode !== null ? (
        <div
          className={clsx({
            [style.message]: true,
            [style.hasWarning]: ErrorMessageCode[errorCode].type === 'WARNING',
          })}
        >
          <span>{ErrorMessageCode[errorCode].text}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ExchangeFormCurrencyStatus;
