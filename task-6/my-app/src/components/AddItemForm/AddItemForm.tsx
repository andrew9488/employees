import React, {ChangeEvent, useState} from "react";
import {addEmployeeAC} from "../../bll/employees-reducer";
import {useDispatch} from "react-redux";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";



export const AddItemForm: React.FC = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string | null>("")

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(null)
    }

    const addItemHandler = () => {
        const trimmedValue = value.trim()
        if (trimmedValue) {
            dispatch(addEmployeeAC(value));
        } else {
            setError("Field is empty!")
        }
        setValue("")

    }

    return (
        <div >
            <TextField label="Name"
                       variant="outlined"
                       value={value}
                       onChange={onChangeValueHandler}
                       helperText={error ? "Field is empty" : ""}
                       error={!!error}
                       onBlur={() => {
                           setError(null)
                       }}
            />
            <IconButton color="primary" onClick={addItemHandler} disabled={!!error}>
                <AddBox/>
            </IconButton>
        </div>
    );
}