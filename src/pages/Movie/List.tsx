import React, {useEffect, useState} from 'react';
import {Box, Grid, Paper} from "@material-ui/core";
import connect from "../../stateManagement/connect";
import {IListState, IListStateDefaultValue, IProps} from "./type";
import MUIDataTable from "mui-datatables";
import {getAllMovie} from "../../_actions/movie";

const List = (props: IProps) => {

    const {moviesData, setMovies} = props;
    const [state, setState] = useState<IListState>(IListStateDefaultValue);

    const {movies, count} = state;

    const getMovies = async () => {
        const moviesData: any = await getAllMovie();
        setMovies(moviesData)
    };

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        setState((prevState: IListState) => ({
            ...prevState,
            ...moviesData,
            count: [moviesData].length
        }))
    }, [moviesData]);


    console.log("State", state);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper className={"paper"}>Filter Area</Paper>
                </Grid>
                <Grid item xs={10}>
                    <Box>
                        <MUIDataTable
                            title={"Movie List"}
                            data={[movies]}
                            columns={[
                                {
                                    name: "Title",
                                    label: "Title",
                                },
                                {
                                    name: "Year",
                                    label: "Year",
                                },
                                {
                                    name: "Genre",
                                    label: "Genre",
                                },
                            ]}
                            options={{
                                selectableRows: 'none',
                                filter: false,
                                search: false,
                                print: false,
                                download: false,
                                count: count
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default connect<IProps>(List);