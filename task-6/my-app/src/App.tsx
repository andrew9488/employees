import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Routes from "./components/Routes/Routes";

export const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}
