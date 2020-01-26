const initState = {
  fields: [
    { currency: 'GBP', id: 'SOURCE', value: undefined, errorCode: null },
    { currency: 'EUR', id: 'TARGET', value: undefined, errorCode: null },
  ],
};

const exchange = (state = initState, action) => {
  switch (action.type) {
    case 'FIELD_ERROR':
      return {
        ...state,
        fields: state.fields.map(el => {
          return el.id === action.id ? { ...el, errorCode: action.errorCode } : el;
        }),
      };
    case 'UPDATE_CURRENCY_VALUE':
      return {
        ...state,
        fields: state.fields.map(el => {
          return el.id === action.id ? { ...el, value: action.value } : el;
        }),
      };

    case 'UPDATE_CURRENCY_CODE':
      return {
        ...state,
        fields: state.fields.map(el => {
          if (el.id === action.id) {
            return { ...el, currency: action.currency };
          }

          if (el.currency === action.currency) {
            return { ...el, currency: Object.keys(action.vault).find(el => el.id !== action.currency) };
          }

          return el;
        }),
      };

    case 'SWAP_FIELDS':
      return {
        ...state,
        fields: [state.fields[1], state.fields[0]],
      };

    default:
      return state;
  }
};

export default exchange;
