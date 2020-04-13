import React from 'react';
import InputText from "../components/InputText";
import Submit from "../components/Submit";
import InputRadio from "../components/InputRadio";
import InputSelect, {SelectOption} from "../components/InputSelect";

type PersonalInfoState = {
    firstName: string;
    lastName: string;
    gender: 'female'| 'male',
    grade: string,
    skills: string[]
}

const defaultGradeOptions: SelectOption[] = [
    {value:"consultant", text:"Consultant"},
    {value:"seniorConsultant",text:"Senior Consultant"},
    {value:"leadConsultant",text:"Lead Consultant"}
]

const defaultSkillOptions: SelectOption[] = [
    {value:"html", text:"HTML"},
    {value:"css",text:"CSS"},
    {value:"Javascript",text:"Javascript"},
    {value:"react", text:"React"},
    {value:"angular",text:"Angular"},
    {value:"vue",text:"Vue"}
]

class PersonalInfoForm extends React.Component<{}, PersonalInfoState>{
    state :PersonalInfoState = {
        firstName: "",
        lastName: "",
        gender: 'male',
        grade: "",
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

            <fieldset className="RadioGroup" id="gender">
                <legend className="Fieldset-legend">Gender:</legend>
                <InputRadio id="male" name="gender" value="male" displayValue="Male"
                            checked={this.state.gender === "male"} onChange={this.handleGenderChange}/>
                <InputRadio id="female" name="gender" value="female" displayValue="Female"
                            checked={this.state.gender === "female"} onChange={this.handleGenderChange}/>
            </fieldset>

            <InputSelect id="grade" name="grade" label="Grade:" value={this.state.grade}
                         options={defaultGradeOptions} isMultiple={false} size={3}
                         onChange={this.handleGradeChange}/>

            <InputSelect id="skills" name="skills" label="Skills:" value= {this.state.skills}
                         options={defaultSkillOptions} isMultiple={true}
                         size={6}
                         onChange={this.handleSkillChange}/>
            <Submit/>
        </form>
    );
  }
}

export default PersonalInfoForm;
