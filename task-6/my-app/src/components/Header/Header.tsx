import {NavLink} from "react-router-dom";
import React from "react";
import s from "./Header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div>
                <NavLink to="/home_page">Main</NavLink>
            </div>
            <div>
                <NavLink to="/employees">Employees</NavLink>
            </div>
        </div>
    );
}