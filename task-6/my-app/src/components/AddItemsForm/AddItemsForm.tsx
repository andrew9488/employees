import React, {ChangeEvent, useState} from "react";
import {addEmployeeAC} from "../../bll/employees-reducer";
import {useDispatch} from "react-redux";

export const AddItemsForm: React.FC = () => {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

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

        </div>
    );
}