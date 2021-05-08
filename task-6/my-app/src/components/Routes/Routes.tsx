import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";


export const PATH = {
    HOME_PAGE: "/home_page",
    EMPLOYEES: "employees"
}

const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.HOME_PAGE} render={() => <HomePage/>}/>
                <Route path={PATH.EMPLOYEES} render={() => {
                }}/>
            </Switch>
        </div>
    );
}

export default Routes;