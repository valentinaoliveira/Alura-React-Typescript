
# Comunicação entre Formulário e Lista de Tarefas no React



---

## Correção e Tipagem do Botão

O botão do formulário é diferente do botão do cronômetro, pois o primeiro é do tipo `submit`. Precisamos adicionar esse tipo no componente `<Botao>`.

### Antes:
```tsx
<Botao>
    Adicionar
</Botao>
```

### Depois:
```tsx
<Botao type="submit">
    Adicionar
</Botao>
```

Se ocorrer erro dizendo que o botão não espera esse tipo, vá para `components/Botao/index.tsx`:

### Componente Botao sem tipagem:
```tsx
class Botao extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
```

### Componente Botao com tipagem:
```tsx
class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}
```

---

## Comunicação entre Formulário e Lista

O formulário precisa comunicar-se com a Lista, mas como React é unidirecional (de cima para baixo), vamos passar os dados via props usando o componente App como intermediário.

### Passo 1: Mover o estado para `App.tsx`

Recorte o `useState` de `Lista` e cole no `App`:

```tsx
import React, { useState } from 'react';

function App() { 
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    return (
        <div className={style.Appstyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} />
            <Cronometro />
        </div>
    );
}
```

---

## Criar Interface `ITarefa`

Crie uma pasta chamada `types` dentro de `src` e um arquivo `tarefa.ts` com o seguinte conteúdo:

```ts
export interface ITarefa {
    tarefa: string;
    tempo: string;
}
```

---

## Tipar a Lista

Em `Lista/index.tsx`, importe a interface e utilize-a:

```tsx
import { ITarefa } from "../../types/tarefa";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}
```

---

## Tipar o Formulário

Em `Formulario/index.tsx`, importe a interface `ITarefa` e defina o tipo da prop `setTarefas`:

```tsx
import { ITarefa } from "../../types/tarefa";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    ...
}
```

---

## Adicionar Tarefa com `setTarefas`

Em vez de usar `console.log()`, adicione a tarefa via `setTarefas`:

```tsx
adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [
        ...tarefasAntigas,
        { ...this.state }
    ]);
}
```

---

## Tipagem do `useState`

No `App.tsx`, mesmo usando um array vazio inicialmente, é bom tipar explicitamente:

```tsx
const [tarefas, setTarefas] = useState<ITarefa[]>([]);
```

---

## Conclusão

Agora conseguimos:

- Controlar o tipo do botão corretamente.
- Enviar tarefas do Formulário para a Lista.
- Tipar os dados de forma segura e reutilizável.
- Utilizar interfaces para manter o código limpo.


