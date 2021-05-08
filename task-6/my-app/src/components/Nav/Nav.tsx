import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css"

export const Nav: React.FC = () => {
    return (
        <div className={s.navBlock}>
            <div>
                <NavLink to="/home_page" activeClassName={s.active}>Main</NavLink>
            </div>
            <div>
                <NavLink to="/employees" activeClassName={s.active}>Employees</NavLink>
            </div>
        </div>
    );
}