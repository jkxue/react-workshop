import React from 'react';
import logo from './tw-logo.svg';
import './App.css';
import UsernameForm from "./containers/UsernameForm";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React Workshop
        </h1>
        <UsernameForm/>
      </header>
    </div>
  );
}

export default App;
