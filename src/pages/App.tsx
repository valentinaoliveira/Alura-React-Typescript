import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from  './pages/App.module.css';


function App() {
  return (
    <div className={style.AppStyle}>
          <Formulario />
          <Lista />
    </div>
  );
}

export default App;
