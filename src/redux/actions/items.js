import { fetchData } from "../../utils";

export const fetchItemsSuccess = (items) => ({
  type: "FETCH_ITEMS_SUCCESS",
  payload: items,
});

export const fetchItemsFailure = (err) => ({
  type: "FETCH_ITEMS_FAILURE",
  payload: err,
});

export const fetchItems = (category, sortType, filters) => async (dispatch) => {
  dispatch({
    type: "FETCH_ITEMS",
    payload: null,
  });

  const requestUrl = `${category === "all" ? "" : `category=${category}`}${
    filters.priceRange
      ? `&price_gte=${filters.priceRange[0]}&price_lte=${filters.priceRange[1]}`
      : ""
  }${
    filters.rating && filters.rating.length > 0
      ? filters.rating.map((item) => `&rating=${item}`).join("")
      : ""
  }&_sort=${sortType}`;

  try {
    const items = await fetchData(requestUrl);
    dispatch(fetchItemsSuccess(items));
  } catch (err) {
    dispatch(fetchItemsFailure(err));
  }
};
