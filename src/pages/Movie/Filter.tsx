import React, {useEffect, useState} from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import connect from "../../stateManagement/connect";
import {IFilterState, IFilterStateDefaultValue} from "./type";
import {getAllMovie, getFilterMovie} from "../../_actions/movie";

const Filter = (props: any) => {

    const [state, setState] = useState<IFilterState>(IFilterStateDefaultValue);

    const {
        inputText,
        yearCheck,
        year,
        releaseYear
    } = state;

    const {setMovies} = props;

    const filterMovies = async () => {
        const respMoviesData: any = inputText.length ? await getFilterMovie(inputText, year, releaseYear) : await getAllMovie(1);

        setMovies(respMoviesData);
    };

    useEffect(() => {
        filterMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputText, year, releaseYear]);

    const handleChange = (e: any) => {
        e.persist();

        setState((prevState: any) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            yearCheck: !e.target.value.length ? false : prevState.yearCheck
        }));
    };

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
                <Box marginY={2}>
                    <FormControl>
                        <FormLabel>Year</FormLabel>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name={'year'}
                                    checked={yearCheck || false}
                                    onChange={(e: any) => {
                                        setState((prevState: any) => ({
                                            ...prevState,
                                            yearCheck: !yearCheck,
                                            year: !yearCheck === false ? 0 : e.target.value,
                                            releaseYear: !yearCheck === true ? 0 : prevState.releaseYear
                                        }))
                                    }}
                                    value={2019}
                                    color="primary"
                                />
                            }
                            label="2019"
                            disabled={!inputText.length}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel component="legend">Release Year</FormLabel>
                        <RadioGroup
                            aria-label="releaseYear"
                            name="releaseYear"
                            value={releaseYear}
                            onChange={(e: any) => {
                                setState((prevState: any) => ({
                                    ...prevState,
                                    releaseYear: yearCheck ? 0 : parseInt(e.target.value)
                                }))
                            }}>
                            <FormControlLabel value={0} control={<Radio/>} label="Show All Movie" disabled={!inputText.length || yearCheck}/>
                            <FormControlLabel value={2021} control={<Radio/>} label="2021" disabled={!inputText.length || yearCheck}/>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
        </>
    );
}

export default connect<any>(Filter);