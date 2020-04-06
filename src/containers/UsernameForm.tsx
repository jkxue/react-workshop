import React from 'react';
import Input from "../components/Input";
import Submit from "../components/Submit";

type UserNameState = {
    firstName: string;
    lastName: string;
}

class UsernameForm extends React.Component<{}, UserNameState>{
    state :UserNameState = {
        firstName: "",
        lastName: ""
    }

  handleSubmit = () => {
    alert("Username: " + this.state.firstName + this.state.lastName);
  };

  setFirstName= (firstName: string) => {
      this.state.firstName = firstName;
  };
  setLastName= (lastName: string) => {
      this.state.lastName = lastName;
  }


  render() {
    return (
        <div className='username'>
          <form onSubmit={this.handleSubmit}>
            <Input lable="firstName" placeholder="firstName" setValue = {this.setFirstName}/>
            <Input lable="lastName" placeholder="lastName" setValue = {this.setLastName}/>
            <Submit/>
          </form>
        </div>
    );
  }
}

export default UsernameForm;
