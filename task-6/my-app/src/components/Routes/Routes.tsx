import React from "react";
import {Route, Switch} from "react-router-dom";


export const PATH = {
    HOME_PAGE: "/home_page",
    EMPLOYEES: "employees"
}

const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.HOME_PAGE} render={() => {}}/>
                <Route path={PATH.EMPLOYEES} render={() => {}}/>
            </Switch>
        </div>
    );
}

export default Routes;