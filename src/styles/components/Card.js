import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  card__media: {
    height: 140,
  },
  card__price: {
    paddingBottom: 0,
  },
}));

export default useStyles;
