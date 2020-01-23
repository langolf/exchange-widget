import React, { useState, useReducer, useRef, useContext } from 'react';
import CurrencyField from '../CurrencyField/CurrencyField.js';
import PrimaryButton from '../PrimaryButton/PrimaryButton.js';
import style from './ExchangeForm.module.css';

import { CurrencyTypes, useAppContext } from '../../hooks/app-context';
import ExchangeFormSwapAction from './ExchangeFormSwapAction';
import ExchangeFormChartAction from './ExchangeFormChartAction';

function ExchangeForm(props) {
  const { state, dispatch } = useAppContext();

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <div className={style.fields}>
        {state.exchange.map(({ field, code, value }) => {
          return (
            <div className={style.entry}>
              <CurrencyField
                key={`${field}`}
                id={`${field}`}
                activeItem={code}
                onCurrencyTypeChange={value => {
                  dispatch({ type: 'CHANGE', code: value, field });
                }}
                onMouseDown={event => {
                  event.stopPropagation();
                  debugger;
                }}
                onCurrencyValueChange={event => {
                  dispatch({
                    type: 'VALUE',
                    amount: event.target.value,
                    field,
                  });
                }}
                value={value}
              >
                <div className={style.status}>
                  <div className={style.balance}>
                    <span>Balance: </span>
                    {CurrencyTypes[code].sign}
                    {state.pocket.vault[code].balance.toFixed(2)}
                  </div>

                  <div className={style.message}>
                    <span>not enough funds</span>
                  </div>
                </div>
              </CurrencyField>
            </div>
          );
        })}

        <ExchangeFormSwapAction
          onClick={() => {
            dispatch({ type: 'SWAP' });
          }}
        />

        <ExchangeFormChartAction onClick={props.onClickChartAction} />
      </div>

      <footer className={style.actions}>
        <PrimaryButton type="submit" text="Hello World" />
      </footer>
    </form>
  );
}

export default ExchangeForm;
