import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import List from './List';

export default ({match}: any) => {
    return (
        <Switch>
            <Route exact path={`${match.url}`}>
                <Redirect to={`${match.url}/list`}/>
            </Route>
            <Route path={`${match.url}/list`} component={List}/>
        </Switch>
    )
};

