import React from "react";

export interface InputProps {

    placeholder: string
    setValue: (value: string) => void
};

export interface InputState {
    value: string;
}

class Input extends React.Component< InputProps,InputState> {
    state :InputState = {
        value : ""
    }

    handleChange (event: React.FormEvent<HTMLInputElement>) {
        this.setState({ value: event.currentTarget.value });
        this.props.setValue( event.currentTarget.value)
    };

    render() {
        return (
            <input type="text" placeholder={this.props.placeholder} value= {this.state.value}  onChange={this.handleChange.bind(this)} />
        );
    }
}
export default Input
