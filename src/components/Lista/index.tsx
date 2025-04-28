import style from './Lista.module.scss';
import React, { useState } from "react";

function Lista () {
    const [tarefas, setTarefas] = useState([
        { tarefa: 'React', tempo: '02:00:00' },
        { tarefa: 'Javascript', tempo: '01:00:00' },
        { tarefa: 'Typescript', tempo: '03:00:00' }
    ]);
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() =>{
                console.log("h2 clicado", tarefas )
                setTarefas([...tarefas, { tarefa :"Estudar estado", tempo : "05:00:00" }]);  
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
