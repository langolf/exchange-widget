import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';
import { useStore } from 'redhooks';

import PrimaryButton from '../PrimaryButton/PrimaryButton.js';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';
import ExchageFormCurrencyField from './ExchangeFormCurrencyField';
import ExchangeFormCurrencyStatus from './ExchangeFormCurrencyStatus';
import ExchangeFormSwapAction from './ExchangeFormSwapAction';
import ExchangeFormRatioInfo from './ExchangeFormRatioInfo';

const ExchangeForm = ({ onClickChartAction }) => {
  const { state, dispatch } = useStore();
  const [hasError, setExchangeValidation] = useState(false);
  const { vault } = state.userPocket;

  useEffect(() => {
    if (state.exchange.fields.find(el => el.errorCode !== null)) {
      setExchangeValidation(true);
      return;
    }

    setExchangeValidation(false);
  }, [state.exchange.fields]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <fieldset className={style.exchangeGroup}>
        {state.exchange.fields.map(field => (
          <div className={style.exchangeField} key={`${field.id}`}>
            <ExchageFormCurrencyField
              id={field.id}
              value={field.value}
              currency={field.currency}
              onCurrencyTypeChange={code => {
                dispatch({ type: 'UPDATE_CURRENCY_CODE', currency: code, id: field.id, vault });
              }}
              onCurrencyValueChange={event => {
                dispatch({ type: 'UPDATE_CURRENCY_VALUE', value: event.target.value, id: field.id });

                if (event.target.value > vault[field.currency].balance) {
                  dispatch({ type: 'FIELD_ERROR', errorCode: 'EXCEED', id: field.id });
                } else {
                  dispatch({ type: 'FIELD_ERROR', errorCode: null, id: field.id });
                }
              }}
            />

            <ExchangeFormCurrencyStatus field={field} />
          </div>
        ))}

        <ExchangeFormSwapAction
          onClick={() => {
            dispatch({ type: 'SWAP_FIELDS' });
          }}
        />

        <ExchangeFormRatioInfo pair={[...state.exchange.fields.map(el => el.currency)]} onClick={onClickChartAction} />
      </fieldset>

      <footer className={style.submit}>
        <PrimaryButton type="submit" text="Exchange" isDisabled={hasError} />
      </footer>
    </form>
  );
};

export default ExchangeForm;
