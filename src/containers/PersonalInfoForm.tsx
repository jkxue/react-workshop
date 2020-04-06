import React from 'react';
import InputText from "../components/InputText";
import Submit from "../components/Submit";
import InputRadio from "../components/InputRadio";
import InputSelect from "../components/InputSelect";
import InputMultipleSelect from "../components/InputMultipleSelect";

type PersonalInfoState = {
    firstName: string;
    lastName: string;
    gender: 'Female'| 'Male',
    grade: 'Consultant'| 'Senior Consultant'| 'Lead Consultant',
    skills: string[]
}

class PersonalInfoForm extends React.Component<{}, PersonalInfoState>{
    state :PersonalInfoState = {
        firstName: "",
        lastName: "",
        gender: 'Male',
        grade: 'Consultant',
        skills: []
    }

  handleSubmit:(event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    if(event.target){
        const{firstName, lastName} = this.state;
        alert(`Username: ${firstName} ${lastName}
         Gender: ${this.state.gender},
         Grade: ${this.state.grade},
         Skills: ${this.state.skills.join(';')}`);
    }
      event.preventDefault();
  };

  handleNameChange:(event: React.ChangeEvent<HTMLInputElement>) => void
      = (event)=> {
      // @ts-ignore
      this.setState({[event.currentTarget.name]: event.currentTarget.value});
  };

  handleGenderChange:(event: React.ChangeEvent<HTMLInputElement>) => void
        = (event)=> {
        // @ts-ignore
        this.setState({gender: event.currentTarget.value});
  };

  handleGradeChange:(event: React.FormEvent<HTMLSelectElement>) => void = (event) => {
      // @ts-ignore
      this.setState({grade: event.currentTarget.value})
  };

  handleSkillChange:(event: React.FormEvent<HTMLSelectElement>) => void = (event) => {
      const currentValue = event.currentTarget.value;
      const index = this.state.skills.indexOf(currentValue);
      index === -1 ? this.state.skills.push(currentValue) : this.state.skills.splice(index, 1);
      this.setState({ skills: this.state.skills});
  };

  render() {
    return (
        <form className="PersonalInfo-form" onSubmit={this.handleSubmit}>
            <InputText id="firstName" label="FirstName:" name="firstName" placeholder="firstName"
                   value= {this.state.firstName} onChange={this.handleNameChange}/>
            <InputText id="lastName" label="LastName:" name="lastName" placeholder="lastName"
                   value={this.state.lastName} onChange={this.handleNameChange}/>

            <InputRadio id="gender" name="gender" label="Gender:" options={['male','female']} onChange={this.handleGenderChange}/>

            <InputSelect id="grade" name="grade" label="Grade:" value={this.state.grade}
                         options={["Consultant", "Senior Consultant", "Lead Consultant"]}
                         onChange={this.handleGradeChange}/>

            <InputMultipleSelect id="skills" label="Skills:" name="skills" value= {this.state.skills}
                         options={["HTML","CSS","Javascript","React","Angular","Vue"]}
                         size={4}
                         onChange={this.handleSkillChange}/>

            <Submit/>
        </form>
    );
  }
}

export default PersonalInfoForm;
