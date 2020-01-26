import React from 'react';
import style from './ExchangeForm.module.css';
import CurrencySelector from 'ui/CurrencySelector/CurrencySelector';
import Input from 'ui/Input/Input';
import { useStore } from 'redhooks';

const ExchangeFormCurrencyField = ({ type, onCurrencyTypeChange, onCurrencyValueChange }) => {
  const { state, dispatch } = useStore();
  return (
    <div className={style.currencyField}>
      <div className={style.currencyFieldSelector}>
        <CurrencySelector key={`${type}-select`} activeItem={type} onChange={onCurrencyTypeChange} />
      </div>

      <div className={style.currencyFieldInput}>
        <Input
          key={`${type}-input`}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="0"
          value={state.exchange.find(el => el.key === type).value}
          onChange={onCurrencyValueChange}
        />
      </div>
    </div>
  );
};

export default ExchangeFormCurrencyField;
