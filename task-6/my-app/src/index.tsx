import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {store} from './bll/store';
import {Provider} from 'react-redux';
import {PATH} from "./components/Routes/Routes";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={PATH.HOME_PAGE}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
