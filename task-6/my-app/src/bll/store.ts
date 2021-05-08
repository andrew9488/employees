import {applyMiddleware, combineReducers, createStore} from "redux";
import {employeesReducer} from "./employees-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    employees: employeesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>