import React from 'react';
import logo from './tw-logo.svg';
import './App.css';
import PersonalInfoForm from "./containers/PersonalInfoForm";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-body">
        <h2 className="body-title">Personal Info</h2>
        <PersonalInfoForm/>
      </main>
    </div>
  );
}

export default App;
