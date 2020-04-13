import React from "react";
import './InputRadio.css';

type InputRadioProps ={
    id: string
    name: string
    value: string
    checked: boolean
    displayValue: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const InputRadio = ({displayValue, ...inputProps}: InputRadioProps)=>{

    return(
        <label className="Radio-label" htmlFor={inputProps.id}>
            <input className="Input-radio" type="radio" {...inputProps}/>
            {displayValue}
        </label>
    );
}
export default InputRadio as React.FC<InputRadioProps>;

