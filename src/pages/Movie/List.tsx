import React from 'react';
import {Grid, Paper} from "@material-ui/core";

const List = (props: any) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper className={"paper"}>item</Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={"paper"}>item</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default List as any;