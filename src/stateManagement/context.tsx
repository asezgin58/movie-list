import React from 'react';
import {IStore, IStoreStateDefaultValue} from './type';

export const context: any = React.createContext<IStore>(IStoreStateDefaultValue);