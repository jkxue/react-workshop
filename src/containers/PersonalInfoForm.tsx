import React from 'react';
import Input from "../components/Input";
import Submit from "../components/Submit";

type PersonalInfoState = {
    firstName: string;
    lastName: string;
}

class PersonalInfoForm extends React.Component<{}, PersonalInfoState>{
    state :PersonalInfoState = {
        firstName: "",
        lastName: ""
    }

  handleSubmit:(e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    if(e.target){
        const{firstName, lastName} = this.state;
        alert(`Username: ${firstName} ${lastName}`);
    }
    e.preventDefault();
  };

  handleNameChange: (inputName: "firstName" | "lastName" , event: React.ChangeEvent<HTMLInputElement>) => void
      = (inputName, event)=> {
      // @ts-ignore
      this.setState({[inputName]: event.currentTarget.value});
  };

  render() {
    return (
        <form className="PersonalInfo-form" onSubmit={this.handleSubmit}>
            <Input id="firstName" label="firstName" name="firstName" placeholder="firstName"
                   value= {this.state.firstName} onChange= {e =>{this.handleNameChange("firstName",e);}}/>
            <Input id="lastName" label="lastName" name="firstName" placeholder="lastName"
                   value={this.state.lastName} onChange= {e =>{this.handleNameChange("lastName",e);}}/>
            <Submit/>
        </form>
    );
  }
}

export default PersonalInfoForm;
