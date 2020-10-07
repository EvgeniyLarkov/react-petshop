import React from "react";
import SimpleCard from "./Card";
import Grid from "@material-ui/core/Grid";

function CardTable() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <SimpleCard />
            </Grid>
            <Grid item>
                <SimpleCard />
            </Grid>
            <Grid item>
                <SimpleCard />
            </Grid>
        </Grid>
    );
}

export default CardTable;
