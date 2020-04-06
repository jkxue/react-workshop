import React from "react";
import './Input.css';
type InputProps ={
    id: string
    label: string
    name: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

// type InputState = {}

const Input = (props: InputProps)=>{
    const {label,  ...inputProps} = props;
        return(
            <>
                <label className="Input-label" htmlFor={inputProps.id}>{label}</label>
                <input className="Input-text" type="text" {...inputProps} />
            </>
        );
}
export default Input as React.FC<InputProps>;

// class Input extends React.Component<InputProps, InputState> {
//
//     render() {
//         const {label,  ...inputProps} = this.props;
//         return(
//             <>
//                 <label className="Input-label" htmlFor={inputProps.id}>{label}</label>
//                 <input className="Input-text" type="text" {...inputProps} />
//             </>
//         );
//     }
// }
// export default Input as React.ClassicComponentClass<InputProps>;
