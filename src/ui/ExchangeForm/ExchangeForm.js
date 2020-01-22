import React, { useState, useReducer, useRef, useContext } from "react";
import CurrencyField from "../CurrencyField/CurrencyField.js";
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";
import style from "./ExchangeForm.module.css";

import { useAppContext } from "../../hooks/app-context";
import ExchangeFormSwapAction from "./ExchangeFormSwapAction";
import ExchangeFormChartAction from "./ExchangeFormChartAction";

function ExchangeForm({ pair }) {
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
                activeItem={code}
                onCurrencyTypeChange={event => {
                  dispatch({ type: "CHANGE", code: event.target.value, field });
                }}
                onCurrencyValueChange={event => {
                  dispatch({
                    type: "VALUE",
                    amount: event.target.value,
                    field
                  });
                }}
                value={value}
                balance={state.pocket.vault[code].balance}
              />
            </div>
          );
        })}

        <ExchangeFormSwapAction
          onClick={() => {
            dispatch({ type: "SWAP" });
          }}
        />

        <ExchangeFormChartAction
          onClick={() => {
            dispatch({ type: "CHART" });
          }}
        />
      </div>

      <footer className={style.actions}>
        <PrimaryButton type="submit" text="Hello World" />
      </footer>
    </form>
  );
}

export default ExchangeForm;
