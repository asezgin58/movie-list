import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../components/Layout';

export default ({component: Component, ...otherParams}: any) => {
    return (
        <Route
            {...otherParams}
            render={props => {
                return Component ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                    otherParams.render(props)
                );
            }}
        />
    );
};