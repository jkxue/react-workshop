import React from "react";
import './InputMultipleSelect.css';
import InputText from "./InputText";

type InputMultipleSelectProps ={
    id: string
    name: string
    label: string
    options: string[]
    size: number
    value: string[]
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

const InputSelect = (props: InputMultipleSelectProps)=>{
    const options = props.options.map(option =>
        <option value={option}>{option}</option>
    );
    return(
        <>
            <InputText id={props.name} label={props.label} name={props.name} value= {props.value.join(';')} />
            <select className="Input-multiple-select" name={props.name} value={props.value} multiple onChange={props.onChange} size={props.size}>
                {options}
            </select>
        </>
    );
}
export default InputSelect as React.FC<InputMultipleSelectProps>;

