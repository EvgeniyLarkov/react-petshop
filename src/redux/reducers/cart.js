const initialState = {
  items: [],
  totalSumm: 0,
  state: "empty",
};

const isEmpty = (arr) => arr.length === 0;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      return {
        ...state,
        state: "filled",
        items: [...state.items, action.payload],
        totalSumm: state.totalSumm + action.payload.price,
      };
    }
    case "REMOVE_CART_ITEM": {
      const newItems = state.items.filter(
        (el, index) => index !== action.payload
      );
      return {
        ...state,
        state: isEmpty(newItems) ? "empty" : "filled",
        totalSumm: state.totalSumm - state.items[action.payload].price,
        items: newItems,
      };
    }
    case "EMPTY_CART": {
      return {
        state: "empty",
        items: [],
        totalSumm: 0,
      };
    }
    default:
      return state;
  }
};

export default cart;
