import { useEffect } from 'react';
import { withRouter } from 'react-router';

const Index = ({ children, location: { pathname } }:any) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
};

export default withRouter(Index) as any;
