export const changePriceRange = (price) => ({
  type: "CHANGE_PRICERANGE",
  payload: price,
});

export const changeFilterValue = (id, value) => ({
  type: "CHANGE_FILTERVALUE",
  payload: { id, value },
});

export const openModal = () => ({
  type: "OPEN_MODAL",
  payload: null,
});


export const closeModal = () => ({
  type: "CLOSE_MODAL",
  payload: null,
});