import React from "react";
import './InputText.css';
type InputTextProps ={
    id: string
    label: string
    name: string
    placeholder?: string
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

// type InputTextState = {}

const InputText = (props: InputTextProps)=>{
    const {label,  ...inputTextProps} = props;
        return(
            <>
                <label className="Input-label" htmlFor={inputTextProps.id}>{label}</label>
                <input className="Input-text" type="text" {...inputTextProps} />
            </>
        );
}
export default InputText as React.FC<InputTextProps>;

// class InputText extends React.Component<InputTextProps, InputTextState> {
//
//     render() {
//         const {label,  ...inputTextProps} = this.props;
//         return(
//             <>
//                 <label className="InputText-label" htmlFor={inputTextProps.id}>{label}</label>
//                 <input className="InputText-text" type="text" {...inputTextProps} />
//             </>
//         );
//     }
// }
// export default InputText as React.ClassicComponentClass<InputTextProps>;
