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

  handleSubmit = () => {
    alert("Username: " + this.state.firstName + this.state.lastName);
  };

  setFirstName= (firstName: string) => {
      this.setState({firstName: firstName});
  };
  setLastName= (lastName: string) => {
      this.setState({lastName: lastName});
  }

  render() {
    return (
        <form className="PersonalInfo-form" onSubmit={this.handleSubmit}>
            <Input lable="firstName" placeholder="firstName" setValue = {this.setFirstName}/>
            <Input lable="lastName" placeholder="lastName" setValue = {this.setLastName}/>
            <Submit/>
        </form>
    );
  }
}

export default PersonalInfoForm;
