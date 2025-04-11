
# Evitando Sobresposição de Estilos com CSS Modules

## Introdução

Como nosso estilo já está quase todo pronto, só faltará o cronômetro que faremos ao final.  
Agora poderemos nos atentar ao problema de sobreposição que falamos anteriormente.

Recapitulando, imaginemos que precisamos ter uma planilha com todas as classes criadas e dizer:  
_"não podemos utilizar `inputContainer` e nem `novaTarefa`, porque já as usamos no código"._

Seria muito maçante, pois podemos utilizar outras classes sem sobrepor a outras. Existem soluções para isso.

Se temos um app e um site pequenos, usamos pacotes externos com CSS e colocarmos uma classe nossa, a possibilidade de ter uma sobreposição é bem alta, afinal estes arquivos importados são bem grandes.

## Solução: CSS Modules

Para conseguirmos criar uma classe única mesmo que o nome seja genérico e evitar o problema de sobreposição, usamos **CSS Modules**.

### Configurando com TypeScript

Como estamos utilizando o TypeScript, precisaremos de um plugin chamado `typescript-plugin-css-modules`.  
Ele pode ser encontrado no site da NPM.

1. **Instalação:**
   ```bash
   npm install -D typescript-plugin-css-modules
   ```

2. **Configuração no tsconfig.json:**
   ```json
   {
     "compilerOptions": {
       "plugins": [{ "name": "typescript-plugin-css-modules" }]
     }
   }
   ```

   - Adicione essa linha logo após `"jsx": "react-jsx"` dentro de `compilerOptions`.

3. **Recarregue o projeto** e atualize a página com `F5`.

## Convertendo Arquivos SCSS para Módulos

### 1. App.module.scss

Renomeie `style.scss` para `App.module.scss`.  
No `App.tsx`, importe o módulo como um objeto:

```tsx
import style from './App.module.scss';

function App() {
    return (
        <div className={style.AppStyle}>
            <Formulario />
            <Lista />
        </div>
    );
}
```

### 2. Botao.module.scss

Renomeie `style.scss` para `Botao.module.scss` e atualize o componente:

```tsx
import style from './Botao.module.scss';

class Botao extends React.Component {
    render() {
        return <button className={style.botao}>Botão</button>;
    }
}
```

### 3. Formulario.module.scss

Renomeie `style.scss` para `Formulario.module.scss`:

```tsx
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    ...
                </div>
            </form>
        );
    }
}
```

- Se a classe contivesse hífen (ex: `"input-container"`), usaria-se: `style["input-container"]`.

### 4. Lista.module.scss

Renomeie `style.scss` para `Lista.module.scss`:

```tsx
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [
        { tarefa: 'React', tempo: '02:00:00' },
        { tarefa: 'JavaScript', tempo: '01:00:00' },
        { tarefa: 'TypeScript', tempo: '03:00:00' }
    ];
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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
```

## Conclusão
  
Os CSS Modules permitem que cada classe gerada tenha um nome único e com escopo local, o que evita conflitos.


