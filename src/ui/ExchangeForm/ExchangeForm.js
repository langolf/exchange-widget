import React, { useState, useReducer, useRef, useContext } from "react";
import CurrencyField from "../CurrencyField/CurrencyField.js";
import { CurrencyTypes } from "../../enum.js";
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";
import style from "./ExchangeForm.module.css";

import { useAppContext } from "../../hooks/app-context";
import { ReactComponent as IconSwap } from "./icon-swap.svg";
import { ReactComponent as IconRiseChart } from "./icon-rise-chart.svg";
import Icon from "../Icon/Icon";

function ExchangeForm({ pair }) {
  const { state, dispatch } = useAppContext();

  return (
    <form
      className={style.root}
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <div className={style.fields}>
        {state.exchange.map(({ id, value, code }, idx) => {
          const vaultEntry = state.pocket.vault.find(el => el.code === code);

          return (
            <div className={style.entry}>
              <CurrencyField
                key={`${id}`}
                activeItem={code}
                onCurrencyTypeChange={event => {
                  dispatch({ type: "CHANGE", code: event.target.value, id });
                }}
                onCurrencyValueChange={event => {
                  dispatch({ type: "VALUE", amount: event.target.value, id });
                }}
                value={value}
                balance={vaultEntry.balance}
              />
            </div>
          );
        })}

        <div
          className={style.swap}
          onClick={() => {
            dispatch({ type: "SWAP" });
          }}
        >
          <div className={style.swapIcon}>
            <Icon>
              <IconSwap />
            </Icon>
          </div>
        </div>

        <div className={style.chart}>
          <div className={style.chartIcon}>
            <Icon>
              <IconRiseChart />
            </Icon>
          </div>
          <span>$1 = $1</span>
        </div>
      </div>

      <footer className={style.actions}>
        <PrimaryButton type="submit" text="Hello World" />
      </footer>
    </form>
  );
}

export default ExchangeForm;
