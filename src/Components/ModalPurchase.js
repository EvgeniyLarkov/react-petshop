import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  isModalOpen,
  isPurchasing,
  isNotPurchased,
  isSuccessfulPurchase,
} from "../utils/selectors";
import { closeModal } from "../redux/actions/uiState";
import { purchaseItems } from "../redux/actions/user";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../styles/";

const ModalPurchase = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const uiState = useSelector(({ uiState }) => uiState);
  const userState = useSelector(({ user }) => user.state);

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleConfirmPurchase = () => {
    dispatch(purchaseItems());
  };

  return (
    <div>
      <Dialog
        open={isModalOpen(uiState)}
        maxWidth="sm"
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Purchase confirmation</DialogTitle>
        <DialogContent>
          {isPurchasing(userState) && (
            <div className={classes.modal__container}>
              <CircularProgress color="secondary" />
            </div>
          )}
          {isNotPurchased(userState) && (
            <DialogContentText id="alert-dialog-description">
              Do you agree to purchase all this beautiful products?
            </DialogContentText>
          )}
          {isSuccessfulPurchase(userState) && (
            <DialogContentText id="alert-dialog-description">
              Thank you for purchase
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {isSuccessfulPurchase(userState) ? (
            <Button onClick={handleModalClose} autoFocus>
              Ok
            </Button>
          ) : (
            <>
              <Button
                onClick={handleModalClose}
                color="primary"
                disabled={isPurchasing(userState)}
              >
                Disagree
              </Button>
              <Button
                onClick={handleConfirmPurchase}
                color="secondary"
                variant="outlined"
                disabled={isPurchasing(userState)}
                autoFocus
              >
                Agree
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default React.memo(ModalPurchase);
