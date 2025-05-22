import style from './Lista.module.scss';
import React from "react";
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[];
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Lista({ tarefas, setTarefas }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log("h2 clicado", tarefas);
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]);
            }}>
                Estudos do dia
            </h2>
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
