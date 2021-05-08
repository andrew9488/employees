import React from "react";
import {EmployeeType} from "../../../bll/employees-reducer";

type EmployeePropsType = {
    employee: EmployeeType
    removeEmployee: (id: number) => void
}

export const Employee: React.FC<EmployeePropsType> = (props) => {

    const removeEmployee = (id: number) => {
        if (id) {
            props.removeEmployee(id)
        }
    }

    return (
        <ul>
            <li>{props.employee.first_name} {props.employee.last_name}</li>
            <button onClick={() => removeEmployee(props.employee.id)}>x</button>
        </ul>
    )
}