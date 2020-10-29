import React, { Component } from 'react';
import './App.css';
import Adress from './components/Adress';
import PersonalData from './components/PersonalData';
import ProfessionalData from './components/ProfessionalData';

class App extends Component {
  render () {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <PersonalData />
          </fieldset>
          <fieldset>
            <legend>Endereço:</legend>
            <Adress />
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
              <ProfessionalData />
            </fieldset>
          </form>
      </div>
    );
  }
}

export default App; 