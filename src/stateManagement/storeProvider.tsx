import React, {useState} from 'react';
import {context} from './context';
import {IStore, IStoreStateDefaultValue} from './type';
import {getAllMovie} from "../_actions/movie";

const StoreProvider = (props: any) => {

    const [store, setStore] = useState<IStore>(IStoreStateDefaultValue);

    const getMovies = async () => {
        const resp: any = await getAllMovie();

        setStore((prevState) => ({
            ...prevState,
            movies: resp
        }));
    };

    let valueObj: any = {
        store,
        getMovies
    };

    return (
        <>
            <context.Provider value={valueObj}>
                {props.children}
            </context.Provider>
        </>
    );
}

export default StoreProvider;