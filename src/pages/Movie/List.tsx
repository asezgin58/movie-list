import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@material-ui/core";
import connect from "../../stateManagement/connect";
import {IListState, IListStateDefaultValue, IProps} from "./type";
import MUIDataTable from "mui-datatables";
import {getAllMovie} from "../../_actions/movie";
import Filter from './Filter';

const List = (props: IProps) => {

    const {moviesData, setMovies} = props;
    const [state, setState] = useState<IListState>(IListStateDefaultValue);

    const {movieList, count, page} = state;

    const getMovies = async () => {
        const respMoviesData: any = await getAllMovie(page);
        setMovies(respMoviesData)
    };

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    useEffect(() => {
        if (moviesData) {
            setState((prevState: IListState) => ({
                ...prevState,
                movieList: moviesData.results,
                count: moviesData.total_results
            }))
        }
    }, [moviesData]);

    console.log("--moviesData", moviesData);
    console.log("--count", count);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Filter/>
                </Grid>
                <Grid item xs={10}>
                    <Box>
                        <MUIDataTable
                            title={"Movie List"}
                            data={movieList}
                            columns={[
                                {
                                    name: "title",
                                    label: "Title",
                                },
                                {
                                    name: "release_date",
                                    label: "Year",
                                },
                                {
                                    name: "vote_average",
                                    label: "Vote Average",
                                },
                            ]}
                            options={{
                                serverSide: true,
                                selectableRows: 'none',
                                filter: false,
                                search: false,
                                print: false,
                                download: false,
                                count: count,
                                rowsPerPage: 20,
                                onChangePage: (e: number) => {
                                    setState((prevState: IListState) => ({
                                        ...prevState,
                                        page: e + 1
                                    }))
                                }
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default connect<IProps>(List);