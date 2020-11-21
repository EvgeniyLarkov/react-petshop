import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          overflowY: "scroll",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "rgba(231,113,125,1)",
    },
  },
});

export default theme;
