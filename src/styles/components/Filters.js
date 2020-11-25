import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "auto",
  },
  root__container: {
    display: "flex",
    alignItems: "center",
  },
  root__margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  filters: {
    display: "flex",
    alignItems: "center",
  },
  filter__button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  filter__label: {
    paddingLeft: theme.spacing(2),
  },
  filter__input: {
    paddingLeft: theme.spacing(1),
  },
  sort__inner: {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(2),
  },
  sort__label: {
    paddingRight: theme.spacing(1),
  },
  sort__button: {
    padding: 0,
  },
  filter__priceslider: {
    width: 260,
    display: "flex",
  },
  filter__rangeinput: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 160,
  },
}));

export default useStyles;
