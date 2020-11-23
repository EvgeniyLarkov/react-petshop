export const purchaseItemsSuccess = () => ({
  type: "PURCHASE_ITEMS_SUCCESS",
  payload: null,
});

export const purchaseItemsFailure = (err) => ({
  type: "PURCHASE_ITEMS_FAILURE",
  payload: err,
});

export const purchaseItems = () => async (dispatch) => {
  dispatch({
    type: "PURCHASE_ITEMS",
    payload: null,
  });

  const timeout = 3000;

  setTimeout(() => {
    dispatch(purchaseItemsSuccess());
  }, timeout);
};
