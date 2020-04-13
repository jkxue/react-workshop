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
    skills: string[],
    province: string,
    cities: SelectOption[],
    city: string
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

type City = {
    id: string,
    value: string
}
type Province = {
    id: string,
    value: string
    cities: City[]
}

const defaultArea: Province[] = [
    {id:"shaanxi",value: '陕西省',
        cities: [
            {id: "xian",value: "西安"},
            {id: "xianyang",value: "咸阳"},
            {id: "baoji",value: "宝鸡"}
    ]},
    {id:"hebei",value: '河北省',
        cities: [
            {id: "shijiazhuang",value: "石家庄"},
            {id: "handan",value: "邯郸"},
            {id: "tangshan",value: "唐山"}
        ]}
]

class PersonalInfoForm extends React.Component<{}, PersonalInfoState>{
    state :PersonalInfoState = {
        firstName: "",
        lastName: "",
        gender: 'male',
        grade: "",
        skills: [],
        province: "",
        cities: [],
        city: ""
    }

  handleSubmit:(event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    if(event.target){
        const{firstName, lastName} = this.state;
        alert(`Username: ${firstName} ${lastName}
         Gender: ${this.state.gender},
         Grade: ${this.state.grade},
         Skills: ${this.state.skills.join(';')},
         province:${this.state.province},
         city:${this.state.city}`);
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

    handleProvinceChange:(event: React.FormEvent<HTMLSelectElement>) => void = (event) => {
        // @ts-ignore
       const cityOptions = defaultArea.find(area => area.id === event.currentTarget.value).cities.map(city =>{
            return {value:city.id, text:city.value}
        })
        // @ts-ignore
        this.setState({province: event.currentTarget.value,cities: cityOptions})
    };

    handleCityChange:(event: React.FormEvent<HTMLSelectElement>) => void = (event) => {
        // @ts-ignore
        this.setState({city: event.currentTarget.value})
    };

  render() {
    // @ts-ignore
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
                         options={defaultGradeOptions} isMultiple={false} size={4}
                         onChange={this.handleGradeChange}/>

            <InputSelect id="skills" name="skills" label="Skills:" value= {this.state.skills}
                         options={defaultSkillOptions} isMultiple={true}
                         size={4}
                         onChange={this.handleSkillChange}/>

            <InputSelect id="province" name="province" label="Province:" value= {this.state.province}
                         options={defaultArea.map(area => { return {value:area.id,text:area.value}})} isMultiple={false}
                         size={4}
                         onChange={this.handleProvinceChange}/>

            <InputSelect id="city" name="city" label="City:" value= {this.state.city}
                         options={this.state.cities} isMultiple={false}
                         size={4}
                         onChange={this.handleCityChange}/>
            <Submit/>
        </form>
    );
  }
}

export default PersonalInfoForm;
