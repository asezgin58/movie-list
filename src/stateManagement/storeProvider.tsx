import React, {useState} from 'react';
import {context} from './context';
import {IStore, IStoreStateDefaultValue} from './type';

const StoreProvider = (props: any) => {

    const [store, setStore] = useState<IStore>(IStoreStateDefaultValue);

    const setStoreData = (data:any) => {
        setStore(prevState => ({
            ...prevState,
            movies: {
                ...store.movies,
                ...data
            }
        }))
    };

    return (
        <>
            <context.Provider value={{
                storeData: store,
                setStore: (data:any) => setStoreData(data)
            }}>
                {props.children}
            </context.Provider>
        </>
    );
}

export default StoreProvider;