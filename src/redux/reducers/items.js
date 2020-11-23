const initialState = {
  data: {},
  state: "init",
  allIds: [],
  err: [],
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS": {
      return {
        state: "fetchItems",
      };
    }
    case "FETCH_SEARCH": {
      return {
        state: "fetchItems",
      };
    }
    case "FETCH_ITEMS_SUCCESS": {
      return {
          data: action.payload,
        allIds: Object.keys(action.payload),
        state: "fetchItemsSuccess",
      };
    }
    case "FETCH_ITEMS_FAILURE": {
      return {
        error: action.payload,
        state: "fetchItemsFailure",
      };
    }
    default:
      return state;
  }
};

export default items;
