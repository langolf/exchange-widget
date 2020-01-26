import React from 'react';
import style from './ExchangeForm.module.css';
import CurrencySelector from 'ui/CurrencySelector/CurrencySelector';
import Input from 'ui/Input/Input';
import { useStore } from 'redhooks';

const ExchangeFormCurrencyField = ({ id, value, onCurrencyTypeChange, onCurrencyValueChange }) => {
  const { state, dispatch } = useStore();
  const { currency } = state.exchange.fields.find(el => el.id === id);

  return (
    <div className={style.currencyField}>
      <div className={style.currencyFieldSelector}>
        <CurrencySelector activeItem={currency} onChange={code => onCurrencyTypeChange(code)} key={id} />
      </div>

      <div className={style.currencyFieldInput}>
        <Input
          key={`${id}-input`}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="0"
          value={value}
          onChange={onCurrencyValueChange}
          valuePrefix={id === 'SOURCE' ? '-' : '+'}
        />
      </div>
    </div>
  );
};

export default ExchangeFormCurrencyField;
