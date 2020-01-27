const initState = {
  baseCurrencies: ['GBP', 'EUR', 'USD'],
  vault: {
    GBP: { balance: 23.23, id: 'GBP' },
    EUR: { balance: 10, id: 'EUR' },
    USD: { balance: 0, id: 'USD' },
  },
};

const userPocket = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userPocket;
