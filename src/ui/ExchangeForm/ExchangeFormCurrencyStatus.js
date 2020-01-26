import React from 'react';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';

const ExchangeFormCurrencyStatus = ({ currency }) => {
  return (
    <div className={style.currencyFieldStatus}>
      <div className={style.balance}>
        <span>Balance: </span>
        {currencyList[currency.id].currencySymbol}
        {currency.balance}
      </div>

      <div className={style.message}>
        <span>not enough funds</span>
      </div>
    </div>
  );
};

export default ExchangeFormCurrencyStatus;
