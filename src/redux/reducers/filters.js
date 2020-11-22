const initialState = {
  activeCategory: "all",
  searchBy: "",
  activeFilters: {},
  currentSort: "name",
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "APPLY_SEARCH": {
      return {
        ...state,
        searchBy: action.payload,
      };
    }
    case "APPLY_FILTERS": {
      return {
        ...state,
        activeFilters: action.payload,
      };
    }
    case "REMOVE_FILTERS": {
      return {
        ...state,
        activeFilters: initialState.activeFilters,
      };
    }
    case "CHANGE_CATEGORY": {
      return {
        ...initialState,
        activeCategory: action.payload,
      };
    }
    case "CHANGE_SORT": {
      return {
        ...state,
        currentSort: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filters;
