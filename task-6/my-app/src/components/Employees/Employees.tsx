import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {EmployeeType, getEmployeesTC, removeEmployeeAC} from "../../bll/employees-reducer";
import {AppRootStateType} from "../../bll/store";
import {Employee} from "./Employee/Employee";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {Paper} from "@material-ui/core";
import s from "./Employees.module.css"


export const Employees: React.FC = () => {

    const employees = useSelector<AppRootStateType, Array<EmployeeType>>(state => state.employees.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [])

    const removeEmployee = (id: number) => {
        if (id) {
            dispatch(removeEmployeeAC(id))
        }
    }

    return (
        <div className={s.employeesContainer}>
            <Paper className={s.paper} elevation={3}>
                <AddItemForm/>
            </Paper>
            <h3>EMPLOYEES</h3>
            {
                employees && employees.map(e => {
                    return (
                        <Employee key={e.id} employee={e} removeEmployee={removeEmployee}/>
                    )
                })
            }
        </div>
    );
}