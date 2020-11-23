import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import Header from "./Components/Header";
import theme from "./styles/theme";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import ModalPurchase from "./Components/ModalPurchase";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Navigation />
          <Home />
          <ModalPurchase />
        </CssBaseline>
      </MuiThemeProvider>
    </>
  );
}

export default App;
