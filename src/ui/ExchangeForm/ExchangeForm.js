import React, { useState, useEffect } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton.js';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';
import ExchageFormCurrencyField from './ExchangeFormCurrencyField';
import ExchangeFormCurrencyStatus from './ExchangeFormCurrencyStatus';
import ExchangeFormSwapAction from './ExchangeFormSwapAction';
import ExchangeFormRatioInfo from './ExchangeFormRatioInfo';
import useFetch from 'react-fetch-hook';
import { useStore } from 'redhooks';

function ExchangeForm(props) {
  const { state, dispatch } = useStore();
  const { isLoading, data } = useFetch(
    `https://api.exchangeratesapi.io/latest?&base=${state.exchange[0].currency}&symbols=${state.exchange[1].currency}`
  );

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <fieldset className={style.exchangeGroup}>
        {Object.values(state.exchange).map(({ currency, key, value }) => (
          <div className={style.exchangeField} key={`${key}`}>
            <ExchageFormCurrencyField
              type={key}
              currency={currency}
              onCurrencyTypeChange={value => {
                dispatch({ type: 'CHANGE', currency: value, key });
              }}
              onCurrencyValueChange={event => {
                dispatch({
                  type: 'VALUE',
                  value: event.target.value,
                  key,
                });
              }}
            />

            <ExchangeFormCurrencyStatus currency={state.userPocket.vault[currency]} />
          </div>
        ))}

        <ExchangeFormSwapAction
          onClick={() => {
            dispatch({ type: 'SWAP' });
          }}
        />

        {isLoading && <ExchangeFormRatioInfo data={data} onClick={props.onClickChartAction} />}
      </fieldset>

      <footer className={style.submit}>
        <PrimaryButton type="submit" text="Exchange" />
      </footer>
    </form>
  );
}

export default ExchangeForm;
