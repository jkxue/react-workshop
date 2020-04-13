import React, {useState} from "react";
import './InputSelect.css';

export type SelectOption = {
    value: string
    text: string
}

type InputSelectProps ={
    id: string
    name: string
    label?: string
    options: SelectOption[]
    value: string | string[]
    isMultiple: boolean
    size?: number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
};


const InputSelect = (props: InputSelectProps)=>{
    const[openStatus, setOpenStatus] = useState(false)
    const options = props.options.map(option =>
        <option key={option.value} value={option.value}>{option.text}</option>
    );

    return(
        <div className="Select-container"  onClick={() => setOpenStatus(!openStatus)}>
            <label className="Input-label" htmlFor={props.id}>{props.label}</label>
            <div className="Select-displayValue" >{typeof props.value === "string" ?
                (props.value === null || props.value === undefined || props.value === '' ? "please select" : props.value)
                : props.value.length === 0 ? "please select" : props.value.join(';')
            }</div>
            {openStatus && (<select className="Input-select" id={props.id} value={props.value} name={props.name}
                    multiple={props.isMultiple} size={props.size} onChange={props.onChange}>
                {options}
            </select>)}
        </div>
    );
}
export default InputSelect as React.FC<InputSelectProps>;

