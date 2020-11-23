import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Typography from "@material-ui/core/Typography";
import { Button, Divider, IconButton } from "@material-ui/core";
import useStyles from "../styles/components/Cart";
import { isCartEmpty } from "../utils/selectors";

function ShoppingCart({
  data,
  items,
  removeItem,
  totalSumm,
  removeCart,
  openModal,
  state,
}) {
  const classes = useStyles();

  const renderCartItem = (name, price, index) => {
    return (
      <div className={classes.cartContent__item} key={index}>
        <Typography component="p" className={classes.cartContent__text}>
          {name}
        </Typography>
        <div className={classes.cartContent__container}>
          <Typography className={classes.cartContent__text}>
            {price} $
          </Typography>
          <IconButton aria-label="delete" onClick={() => removeItem(index)}>
            <ClearIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <aside className={classes.cart}>
      <div className={classes.cart__name}>
        <Typography variant="h6">Cart</Typography>
      </div>
      <Divider />
      <div className={classes.cartContent}>
        {items.map(({ name, price }, index) =>
          renderCartItem(name, price, index)
        )}
      </div>
      <Divider />
      <div className={classes.cart__totalsumm}>
        <Typography>Summary: {totalSumm}</Typography>
      </div>
      <div className={classes.cart__actionarea}>
        <Button
          aria-label="purchase"
          variant="contained"
          color="secondary"
          size="medium"
          fullWidth
          disabled={isCartEmpty(state)}
          onClick={openModal}
        >
          Continue
        </Button>
        <IconButton
          aria-label="empty cart"
          onClick={() => removeCart()}
          disabled={isCartEmpty(state)}
        >
          <RemoveShoppingCartIcon />
        </IconButton>
      </div>
    </aside>
  );
}

export default ShoppingCart;
