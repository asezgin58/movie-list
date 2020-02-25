import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './_assets/style/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = <App/>;
const container = (
    <> {app} </>
);

const documentContainer = document.getElementById('root');
ReactDOM.render(container, documentContainer);
serviceWorker.unregister();
