import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cart__name: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  cart__actionarea: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  cart__totalsumm: {
    padding: theme.spacing(2),
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
  },
  cartContent__container: {
    display: "flex",
  },
  cartContent__item: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  cartContent__text: {
    paddingTop: 10,
  },
}));

export default useStyles;
