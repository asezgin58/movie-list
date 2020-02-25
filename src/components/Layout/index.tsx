import React from 'react';
import Header from "../Header";

const Layout = (props: { children: React.ReactNode }) => {

    return (
        <>
            <Header/>
            <div className="wrapper">
                {props.children}
            </div>
        </>
    )
};

export default Layout