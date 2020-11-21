import { fetchData } from "../../utils";
import { fetchItemsFailure, fetchItemsSucsses } from "./items";

export const changeSort = (sort) => ({
  type: "CHANGE_SORT",
  payload: sort,
});

export const changeCategory = (category) => ({
  type: "CHANGE_CATEGORY",
  payload: category,
});

export const applyFilters = (filters) => ({
  type: "APPLY_FILTERS",
  payload: filters,
});

export const applySearch = (value) => ({
  type: "APPLY_SEARCH",
  payload: value,
});

export const fetchSearch = (searchBy) => async (dispatch) => {
  dispatch({
    type: "FETCH_SEARCH",
    payload: null,
  });

  const requestUrl = `q=${searchBy}`;

  try {
    const items = await fetchData(requestUrl);
    dispatch(fetchItemsSucsses(items));
  } catch (err) {
    dispatch(fetchItemsFailure(err));
  }
};
