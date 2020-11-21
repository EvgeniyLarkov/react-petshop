export const addItemToCart = (item) => ({
    type: "ADD_CART_ITEM",
    payload: item,
  });
  
  export const removeItemFromCart = (index) => ({
    type: "REMOVE_CART_ITEM",
    payload: index,
  });
  
  export const emptyCart = () => ({
    type: "EMPTY_CART",
    payload: null,
  });