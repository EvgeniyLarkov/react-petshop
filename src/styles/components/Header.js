import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background:
      "linear-gradient(90deg, rgba(194,105,166,0.80) 36%, rgba(231,113,125,0.80) 75%)",
  },
  header__inner: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  logo__text: {
    fontSize: 24,
    fontWeight: 300,
  },
}));

export default useStyles;
