const initialState = {
  filters: {
    priceRange: [0, 5000],
    rating: [],
  },
  state: "unchanged",
};

const isNumber = (value) =>
  (value instanceof Number || typeof value === "number") && !isNaN(value);

const isValid = (min, max) =>
  min <= max &&
  min >= initialState.filters.priceRange[0] &&
  max <= initialState.filters.priceRange[1];

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY": {
      return initialState;
    }
    case "CHANGE_PRICERANGE": {
      const [minPrice, maxPrice] = action.payload;

      return {
        ...state,
        state: "changed",
        filters: {
          ...state.filters,
          priceRange:
            isNumber(minPrice) &&
            isNumber(maxPrice) &&
            isValid(minPrice, maxPrice)
              ? action.payload
              : state.priceRange,
        },
      };
    }

    case "CHANGE_FILTERVALUE": {
      return {
        ...state,
        state: "changed",
        filters: {
          ...state.filters,
          [action.payload.id]: action.payload.value,
        },
      };
    }
    case "REMOVE_FILTERS": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default uiState;
