import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";

const Header = () => {

    const history: any = useHistory();

    return (
        <>
            <AppBar position="static" className="header">
                <Toolbar>
                    <Typography variant="h6" className="app-header">
                        <Link to={"/"} className="app-header-link">OMDBMovies</Link>
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => history.push('/movie')}
                    >Movies</Button>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Header