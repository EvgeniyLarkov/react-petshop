const initialState = {
  state: "init",
  error: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "PURCHASE_ITEMS": {
      return {
        state: "purchaseItems",
      };
    }
    case "PURCHASE_ITEMS_SUCCESS": {
      return {
        state: "purchaseItemsSuccess",
      };
    }
    case "PURCHASE_ITEMS_FAILURE": {
      return {
        error: action.payload,
        state: "purchaseItemsFailure",
      };
    }
    case "ADD_CART_ITEM": {
      return {
        ...state,
        state: "init",
      };
    }
    default:
      return state;
  }
};

export default user;
