import React from 'react';
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Home = (props: any) => {

    const history: any = useHistory();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className="paper">
                        <Typography variant="h5">Welcome to Movie App</Typography>
                        <Box marginY={2}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem magni nam, nihil porro provident totam ullam vero voluptatibus! Autem dicta dolor
                                ducimus est et hic illum ipsa magnam magni rerum! Consequuntur cupiditate doloribus earum exercitationem explicabo impedit in modi natus nemo, numquam perspiciatis quas quia quos
                                repellendus
                                sed suscipit.</p>
                        </Box>
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push('/movie')}
                        >Go to Movie List</Button>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Home as any;