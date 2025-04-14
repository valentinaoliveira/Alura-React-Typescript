import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import '../pages/style.scss';


function App() {
  return (
    <div className="AppStyle">
          <Formulario />
          <Lista />
    </div>
  );
}

export default App;
