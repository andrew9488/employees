import React from "react";
import s from "./Header.module.css"
import {Nav} from "../Nav/Nav";

export const Header: React.FC = () => {
    return (
        <div className={s.headerContainer}>
           <Nav/>
        </div>
    );
}