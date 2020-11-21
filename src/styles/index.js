import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  items: {
    marginLeft: theme.spacing(4),
    flexGrow: 4,
    flexBasis: 1,
  },
  items__container: {
    display: "grid",  
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "1fr 1fr 1fr"
    },
  },
  root: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    [theme.breakpoints.down('md')]: {
      display: "flex",
      flexDirection: "column", 
    },
  },
}));

export default useStyles;
