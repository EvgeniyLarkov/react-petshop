import { createSelector } from "reselect";

export const getModalState = (state) => state.modalState;

export const isModalOpen = createSelector(
  getModalState,
  (state) => state === "open"
);

export const isCartEmpty = (state) => state === "empty";

export const isNotPurchased = (state) => state === "init";

export const isPurchasing = (state) => state === "purchaseItems";

export const isSuccessfulPurchase = (state) => state === "purchaseItemsSuccess";
