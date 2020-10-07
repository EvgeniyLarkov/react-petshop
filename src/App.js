import React from 'react';
import {Typography} from "@material-ui/core";
import Navigation from "./Navigation";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Filters from "./Goods";
import CardTable from "./CardTable";

function App() {
  return (
    <main>
      <Navigation/>
      <Grid container spacing={3}>
        <Grid item md={2}>
            <Filters/>
        </Grid>
        <Grid item md={8}>
            <CardTable/>
        </Grid>
        <Grid item md={2}>
            <Paper>
                <Typography>
                    Корзина
                </Typography>
            </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
