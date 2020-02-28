import React, {useContext, memo} from 'react';
import {context} from './context';

export default <P extends object>(Component: React.ComponentType<P>) =>
    memo(({...props}: P) => {
        const {storeData, setStore} = useContext(context) as any;
        return (
            <Component
                {...(props as P)}
                moviesData={storeData.movies}
                setMovies={setStore}
            />
        );
    });
