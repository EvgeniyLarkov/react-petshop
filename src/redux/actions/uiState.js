export const changePriceRange = (price) => ({
  type: "CHANGE_PRICERANGE",
  payload: price,
});

export const changeFilterValue = (id, value) => ({
  type: "CHANGE_FILTERVALUE",
  payload: { id, value },
});
