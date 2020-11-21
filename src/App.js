import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import Header from "./Components/Header";
import theme from "./styles/theme";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Navigation />
          <Home />
        </CssBaseline>
      </MuiThemeProvider>
    </>
  );
}

export default App;
