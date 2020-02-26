import React, {useContext, useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import {context} from "../../stateManagement/context";
import {IListState, IListStateDefaultValue, IProps} from "./type";

const List = (props: IProps) => {

    const {store: {movies}, getMovies} = useContext(context);

    const [state, setState] = useState<IListState>(IListStateDefaultValue);

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (movies) {
            setState((prevState: IListState) => ({
                ...prevState,
                movieList: movies
            }))
        }
    }, [movies]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper className={"paper"}>Filter Area</Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={"paper"}>item</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default List as any;