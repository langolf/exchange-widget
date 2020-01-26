const initState = {
  isModalOpen: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MODAL':
      return {
        isModalOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export default appReducer;
