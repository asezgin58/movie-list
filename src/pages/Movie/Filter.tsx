import React, {useEffect, useState} from 'react';
import {Box, Paper, TextField, Typography} from "@material-ui/core";
import connect from "../../stateManagement/connect";
import {IFilterState, IFilterStateDefaultValue} from "./type";
import {getAllMovie, getAllMovieByTitle} from "../../_actions/movie";

const Filter = (props: any) => {

    const [state, setState] = useState<IFilterState>(IFilterStateDefaultValue);

    const {
        inputText
    } = state;

    const {setMovies} = props;

    const filterMovies = async () => {
        const respMoviesData: any = inputText.length > 0 ? await getAllMovieByTitle(inputText) : await getAllMovie(1);

        setMovies(respMoviesData);
    };

    useEffect(() => {
        filterMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputText]);

    const handleChange = (e: any) => {
        e.persist();

        setState((prevState: any) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    // console.log("---Filterstate", state);

    return (
        <>
            <Paper className={"paper"}>
                <Typography variant="h6">Filter Area</Typography>
                <hr/>
                <Box marginY={2}>
                    <TextField
                        id={"inputText"}
                        name="inputText"
                        label="Title"
                        variant="outlined"
                        onChange={handleChange}
                        value={inputText}
                        fullWidth
                    />
                </Box>

            </Paper>
        </>
    );
}

export default connect<any>(Filter);