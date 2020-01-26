const initState = [
  { currency: 'GBP', key: 'SOURCE', value: 20 },
  { currency: 'EUR', key: 'TARGET', value: 3 },
];

const exchange = (state = initState, action) => {
  switch (action.type) {
    case 'VALUE':
      return state.map(el => {
        return el.key === action.key ? { ...el, value: action.value } : el;
      });
    case 'CHANGE':
      return {
        ...state,
      };
    case 'SWAP':
      return {
        ...state,
        exchange: state.exchange.map((field, idx) => {
          if (field.key === 'SOURCE') {
            const { currency, value } = state.exchange.find(el => el.key === 'TARGET');
            return { ...field, currency, value };
          }

          if (field.key === 'TARGET') {
            const { currency, value } = state.exchange.find(el => el.key === 'SOURCE');
            return { ...field, currency, value };
          }
        }),
      };
    default:
      return state;
  }
};

export default exchange;
