import React, { useState, useEffect } from 'react';
import CurrencyField from '../CurrencyField/CurrencyField.js';
import PrimaryButton from '../PrimaryButton/PrimaryButton.js';
import style from './ExchangeForm.module.css';
import useFetch from 'react-fetch-hook';
import { animated, useSpring } from 'react-spring';

import currencyList from 'hooks/currencies';
import { useAppContext } from 'hooks/app-context';
import ExchangeFormSwapAction from './ExchangeFormSwapAction';
import ExchangeFormRatioInfo from './ExchangeFormRatioInfo';

function ExchangeForm(props) {
  const { state, dispatch } = useAppContext();

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <div className={style.fieldGroup}>
        {state.exchangeNew.map(field => (
          <div className={style.entry} key={`${field.currency}`}>
            <CurrencyField
              key={`${field.key}`}
              activeItem={field.currency}
              currencyValue={field.value}
              onCurrencyTypeChange={value => {
                dispatch({ type: 'CHANGE', currency: value, key: field.key });
              }}
              onCurrencyValueChange={event => {
                dispatch({
                  type: 'VALUE',
                  value: event.target.value,
                  key: field.key,
                });
              }}
            >
              <div className={style.status}>
                <div className={style.balance}>
                  <span>Balance: </span>
                  {/* {`${state.exchangeNew[item].currency.currencySymbol}`} */}
                  {0}
                </div>

                <div className={style.message}>
                  <span>not enough funds</span>
                </div>
              </div>
            </CurrencyField>
          </div>
        ))}

        <ExchangeFormSwapAction
          onClick={() => {
            dispatch({ type: 'SWAP' });
          }}
        />

        <div className={style.chart} onClick={props.onClickChartAction}>
          <ExchangeFormRatioInfo />
        </div>
      </div>

      <footer className={style.actions}>
        <PrimaryButton type="submit" text="Hello World" />
      </footer>
    </form>
  );
}

export default ExchangeForm;
