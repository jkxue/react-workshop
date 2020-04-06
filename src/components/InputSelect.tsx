import React from "react";
import './InputSelect.css';
type InputSelectProps ={
    id: string
    name: string
    label: string
    options: string[]
    value: string
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

const InputSelect = (props: InputSelectProps)=>{
    const options = props.options.map(option =>
        <option value={option}>{option}</option>
    );
    return(
        <>
            <label className="Input-label" htmlFor={props.id}>{props.label}</label>
            <select className="Input-select" value={props.value} name={props.name} onChange={props.onChange}>
                {options}
            </select>
        </>
    );
}
export default InputSelect as React.FC<InputSelectProps>;

