import React, { useReducer, useState } from 'react';
import constate from 'constate';
import currencyList from 'hooks/currencies';
import { createStore, combineReducers } from 'redhooks';

const [AppProvider, useAppContext] = constate(useApp);

export const AppScreen = {
  EXCHANGE: 'EXCHANGE',
  CHART: 'CHART',
};

export const initialState = {
  pocket: {
    baseCurrency: 'GBP',
    vault: {
      GBP: { code: 'GBP', balance: 23.23 },
      EUR: { code: 'EUR', balance: 11.2432234 },
      USD: { code: 'USD', balance: 0.0 },
    },
  },
  exchangeNew: [
    { currency: 'GBP', key: 'SOURCE', value: null },
    { currency: 'EUR', key: 'TARGET', value: null },
  ],
  modalIsOpen: false,
  page: [AppScreen.EXCHANGE],
};

function exchangeFormReducer(type, payload) {
  switch (action.type) {
    case 'VALUE':
      return {
        ...state,
        exchangeNew: state.exchangeNew.map(field => {
          if (field.key === action.key) {
            return { ...field, value: action.value };
          }

          return field;
        }),
      };
    case 'CHANGE':
      return {
        ...state,
        exchangeNew: state.exchangeNew.map(field => {
          if (field.key === action.key) {
            return { ...field, currency: action.currency };
          }

          return field;
        }),
      };
    case 'SWAP':
      return {
        ...state,
        exchangeNew: state.exchangeNew.map((field, idx) => {
          if (field.key === 'SOURCE') {
            const { currency, value } = state.exchangeNew.find(el => el.key === 'TARGET');
            console.log(`swap 1`);

            return { ...field, currency, value };
          }

          if (field.key === 'TARGET') {
            const { currency, value } = state.exchangeNew.find(el => el.key === 'SOURCE');
            console.log(`swap 2`);
            return { ...field, currency, value };
          }

          return field;
        }),
      };
    case 'MODAL':
      return {
        ...state,
        modalIsOpen: action.isOpen,
      };
    default:
      return state;
  }
}
const store = createStore({ exchangeFormReducer });

export default store;
