import React, { useState } from 'react';
import logo from './logo.svg';
//import './App.css';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from '../pages/App.module.scss';
import { Cronometro } from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
