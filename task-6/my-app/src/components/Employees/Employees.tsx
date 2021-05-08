import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {EmployeeType, getEmployeesTC, removeEmployeeAC} from "../../bll/employees-reducer";
import {AppRootStateType} from "../../bll/store";
import {Employee} from "./Employee/Employee";
import {AddItemsForm} from "../AddItemsForm/AddItemsForm";


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
        <div>
            <AddItemsForm/>
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