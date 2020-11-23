import { combineReducers } from "redux";
import filters from './filters';
import items from './items';
import cart from './cart';
import uiState from './uiState';
import user from './user';

export default combineReducers({
  filters,
  items,
  cart,
  uiState,
  user,
});
