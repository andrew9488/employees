import {employeesAPI} from "../dal/api";
import {AppRootStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

type ActionsType =
    ReturnType<typeof getEmployeesAC>
    | ReturnType<typeof removeEmployeeAC>
    | ReturnType<typeof addEmployeeAC>

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

export type EmployeeType = {
    id: number,
    email: string,
    first_name: string
    last_name: string
    avatar: string
}

type SupportType = {
    url: string
    text: string
}

export type EmployeesType = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: Array<EmployeeType>
    support: SupportType
}

let initialState = {} as EmployeesType

export const employeesReducer = (state: EmployeesType = initialState, action: ActionsType): EmployeesType => {
    switch (action.type) {
        case "EMPLOYEES-REDUCER/GET-EMPLOYEES":
            return {
                ...state,
                data: action.employees
            }
        case "EMPLOYEES-REDUCER/REMOVE-EMPLOYEE":
            return {
                ...state,
                data: state.data.filter(e => e.id !== action.id)
            }
        case "EMPLOYEES-REDUCER/ADD-EMPLOYEE":
            let newEmployee: EmployeeType = {
                id: new Date().getTime(),
                first_name: action.name,
                last_name: "NewEmployee",
                avatar: "avatar",
                email: "newEmployee@gmail.com"
            }
            return {
                ...state,
                data: [newEmployee, ...state.data]
            }
        default:
            return state
    }
}

const getEmployeesAC = (employees: Array<EmployeeType>) =>
    ({type: "EMPLOYEES-REDUCER/GET-EMPLOYEES", employees} as const)

export const removeEmployeeAC = (id: number) =>
    ({type: "EMPLOYEES-REDUCER/REMOVE-EMPLOYEE", id} as const)

export const addEmployeeAC = (name: string) =>
    ({type: "EMPLOYEES-REDUCER/ADD-EMPLOYEE", name} as const)

export const getEmployeesTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        return employeesAPI.getEmployees()
            .then(res => {
                dispatch(getEmployeesAC(res.data))
            })
    }
}