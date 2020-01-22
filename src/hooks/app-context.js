import React, { useReducer } from "react";
import constate from "constate";

const [AppProvider, useAppContext] = constate(useApp);

export const CurrencyTypes = {
  GBP: {
    code: "GBP",
    sign: "£"
  },
  EUR: {
    code: "EUR",
    sign: "€"
  },
  USD: {
    code: "USD",
    sign: "$"
  }
};

export const initialState = {
  pocket: {
    baseCurrency: "GBP",
    vault: {
      GBP: { code: "GBP", balance: 23 },
      EUR: { code: "EUR", balance: 11 },
      USD: { code: "USD", balance: 0 }
    }
  },
  // from-to should not change thier position. only codes
  exchange: [
    { code: "GBP", value: "", field: "from" },
    { code: "EUR", value: "", field: "to" }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "VALUE":
      return {
        ...state,
        exchange: state.exchange.map(entry =>
          entry.field === action.field
            ? { ...entry, value: action.amount }
            : entry
        )
      };
    case "CHANGE":
      return {
        ...state,
        exchange: state.exchange.map(entry => {
          if (entry.field === action.field) {
            return { ...entry, code: action.code };
          }

          if (entry.code === action.code) {
            return {
              ...entry,
              code: Object.values(CurrencyTypes).find(
                el => el.code !== action.code
              ).code
            };
          }

          return entry;
        })
      };
    case "SWAP":
      return {
        ...state,
        exchange: [state.exchange[1], state.exchange[0]]
      };
    default:
      return state;
  }
}

function useApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

export { AppProvider, useAppContext };
