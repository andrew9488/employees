import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEmployeeAC, getEmployeesTC, removeEmployeeAC} from "../../bll/employees-reducer";
import {EmployeeType} from "../../bll/employees-reducer";
import {AppRootStateType} from "../../bll/store";
import {Employee} from "./Employee/Employee";


export const Employees: React.FC = () => {

    const employees = useSelector<AppRootStateType, Array<EmployeeType>>(state => state.employees.data)
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [])

    const removeEmployee = (id: number) => {
        if (id) {
            dispatch(removeEmployeeAC(id))
        }
    }

    const onFirstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget.value)
    }
    const onLastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value)
    }

    const addNewEmployee = () => {
        if (firstName === "" || lastName === "") {
            alert("Field is required")
        } else {
            dispatch(addEmployeeAC(firstName, lastName))
            setFirstName("")
            setLastName("")
        }
    }

    return (
        <div>
            <h3>Employees list:</h3>
            <div>
                First Name: <input type="text" value={firstName} onChange={onFirstNameChangeHandler}/>
            </div>
            <div>
                Last Name: <input type="text" value={lastName} onChange={onLastNameChangeHandler}/>
            </div>
            <button onClick={addNewEmployee}>+</button>
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