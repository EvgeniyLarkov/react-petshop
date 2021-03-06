import React, { useEffect } from "react";
import { Filters, ShoppingCart, Card } from "../Components";
import useStyles from "../styles/";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../redux/actions/items";
import {
  applyFilters,
  changeSort,
  fetchSearch,
  removeFilters,
} from "../redux/actions/filters";
import { changeFilterValue, changePriceRange } from "../redux/actions/uiState";
import {
  removeItemFromCart,
  addItemToCart,
  emptyCart,
} from "../redux/actions/cart";
import { LinearProgress } from "@material-ui/core";
import { openModal } from "../redux/actions/uiState";

//to-do
//переделать handleApplyFilters

const Home = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { state: userState } = useSelector(({ user }) => user);
  const { allIds, data, state: itemsState } = useSelector(({ items }) => items);
  const { items: cartItems, totalSumm, state: cartState } = useSelector(
    ({ cart }) => cart
  );
  const filtersState = useSelector(({ filters }) => filters);
  const { filters: uiFilters, state: uiState } = useSelector(
    ({ uiState }) => uiState
  );

  useEffect(() => {
    dispatch(
      fetchItems(
        filtersState.activeCategory,
        filtersState.currentSort,
        filtersState.activeFilters
      )
    );
  }, [
    filtersState.activeCategory,
    filtersState.currentSort,
    filtersState.activeFilters,
  ]);

  useEffect(() => {
    if (itemsState !== "init") {
      dispatch(fetchSearch(filtersState.searchBy));
    }
  }, [filtersState.searchBy]);

  const handleAddItem = (item) => () => {
    dispatch(addItemToCart(item));
  };

  const handleChangeFilterValue = (id, value) => {
    dispatch(changeFilterValue(id, value));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  const handleRemoveCart = () => {
    dispatch(emptyCart());
  };

  const handleChangeSort = ({ target: { value } }) => {
    dispatch(changeSort(value));
  };

  const handleChangePriceRange = (value) => {
    dispatch(changePriceRange(value));
  };

  const handleApplyFilters = () => {
    dispatch(applyFilters(uiFilters));
  };

  const handleRemoveFilters = () => {
    dispatch(removeFilters());
  };

  const handleModalOpen = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.root}>
      <div className={styles.items}>
        <Filters
          changeSort={handleChangeSort}
          changePriceRange={handleChangePriceRange}
          applyFilters={handleApplyFilters}
          removeFilters={handleRemoveFilters}
          changeFilterValue={handleChangeFilterValue}
          currentSort={filtersState.currentSort}
          filters={uiFilters}
          state={uiState}
        />
        {itemsState === "fetchItems" && <LinearProgress color="secondary" />}
        <div className={styles.items__container}>
          {itemsState === "fetchItemsSuccess" &&
            allIds.map((id) => (
              <Card
                {...data[id]}
                addToCart={handleAddItem(data[id])}
                userState={userState}
                key={id}
              />
            ))}
        </div>
      </div>
      <ShoppingCart
        removeItem={handleRemoveItem}
        removeCart={handleRemoveCart}
        openModal={handleModalOpen}
        items={cartItems}
        totalSumm={totalSumm}
        state={cartState}
      />
    </div>
  );
};

export default Home;
