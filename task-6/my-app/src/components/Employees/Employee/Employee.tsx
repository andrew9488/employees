import {IconButton} from "@material-ui/core";
import React from "react";
import {EmployeeType} from "../../../bll/employees-reducer";
import {Delete} from "@material-ui/icons";
import s from "./Employee.module.css";

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
        <div className={s.employeeContainer}>
            <div className={s.employeeBlock}>
                <span>{props.employee.first_name}</span>
                <IconButton aria-label="delete" onClick={() => removeEmployee(props.employee.id)}>
                    <Delete/>
                </IconButton>
            </div>
        </div>
    )
}