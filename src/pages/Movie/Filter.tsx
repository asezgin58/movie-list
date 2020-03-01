import React, {useEffect, useState} from 'react';
import {Box, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@material-ui/core";
import connect from "../../stateManagement/connect";
import {IFilterState, IFilterStateDefaultValue} from "./type";
import {getAllMovie, getFilterMovie} from "../../_actions/movie";

const Filter = (props: any) => {

    const [state, setState] = useState<IFilterState>(IFilterStateDefaultValue);

    const {
        inputText,
        yearCheck,
        year
    } = state;

    const {setMovies} = props;

    const filterMovies = async () => {
        const respMoviesData: any = inputText.length ? await getFilterMovie(inputText, year) : await getAllMovie(1);

        setMovies(respMoviesData);
    };

    useEffect(() => {
        filterMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputText, year]);

    const handleChange = (e: any) => {
        e.persist();

        setState((prevState: any) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            yearCheck: !e.target.value.length ? false : prevState.yearCheck
        }));
    };

    console.log("---Filterstate", state);

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
                        required
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={'year'}
                                checked={yearCheck || false}
                                onChange={(e: any) => {
                                    setState((prevState: any) => ({
                                        ...prevState,
                                        yearCheck: !yearCheck,
                                        year: !yearCheck === false ? 0 : e.target.value
                                    }))
                                }}
                                value={2019}
                                color="primary"
                            />
                        }
                        label="2019"
                        disabled={!inputText.length}
                    />
                </Box>
            </Paper>
        </>
    );
}

export default connect<any>(Filter);