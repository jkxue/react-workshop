import React from "react";
import './InputRadio.css';
type InputRadioProps ={
    id: string
    name: string
    label: string
    options: string[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const InputRadio = (props: InputRadioProps)=>{
    const options = props.options.map(option =>
        <label className="Radio-label">
            <input className="Input-radio" type="radio" id={option} name={props.name} value={option} onChange={props.onChange}/>
            {option}
        </label>
    );
    return(
        <>
            <label className="Input-label" htmlFor={props.id}>{props.label}</label>
            {options}
        </>
    );
}
export default InputRadio as React.FC<InputRadioProps>;

