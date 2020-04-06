import React from "react";

type InputProps ={

    lable: string
    placeholder: string
    setValue: (value: string) => void
};

type InputState = {
    value: string;
}

class Input extends React.Component< InputProps,InputState> {
    state :InputState = {
        value : ""
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ value: event.currentTarget.value });
        this.props.setValue( event.currentTarget.value)
    };

    render() {
        return(
        <label>
            {this.props.lable}
            <input type="text" placeholder={this.props.placeholder} value= {this.state.value}  onChange={this.handleChange} />
        </label>
    );
    }
}
export default Input
