# Deixando a Lista Dinâmica no React

Agora que já temos o código desse nosso aplicativo maravilhoso, vamos começar a deixá-lo dinâmico, mexendo na lista para fazê-la funcionar.

## Código Inicial

No VS Code, já temos nossa lista de tarefas mockada:

```javascript
function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }];
}
```

Por enquanto ela está como `const`. Vamos mudar para `let`, uma variável mutável:

```javascript
function Lista() {
    let tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }];
}
```

## Adicionando Tarefa ao Clicar

No `<h2>`, adicionamos a propriedade `onClick`, que é similar ao HTML, mas com camelCase:

```javascript
<h2 onClick={() => {
    tarefas = [...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]
}}>
    Clique aqui
</h2>
```

## Verificando no Console

Para testar, adicionamos um `console.log`:

```javascript
<h2 onClick={() => {
    console.log("h2 clicado");
    tarefas = [...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }];
}}>
    Clique aqui
</h2>
```

Depois de abrir o **Console** do navegador (`Inspecionar > Console`), ao clicar no `<h2>`, vemos `"h2 clicado"` e o array atualizado.

**Problema:**  
Apesar de o array ser atualizado, a nova tarefa não aparece na tela.

## Entendendo o Problema: React é Reativo

O React é reativo. Ele só renderiza (atualiza a interface) quando informamos que houve uma mudança. Para isso, não podemos simplesmente alterar variáveis normais — precisamos usar **state**.

### O que é State?

O `state` é uma variável especial do React. Sempre que ele muda, o React re-renderiza o componente automaticamente.

## Corrigindo com useState

Vamos mudar para usar o Hook `useState`.

### Passo 1: Criar o State

Cortamos o array de tarefas e usamos `useState`:

```javascript
const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
}, {
    tarefa: 'Typescript',
    tempo: '03:00:00'
}]);
```

> `tarefas` é o valor atual do estado e `setTarefas` é a função para atualizá-lo.

### Passo 2: Atualizar o onClick

Mudamos o `onClick` para usar `setTarefas`:

```javascript
<h2 onClick={() => {
    setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]);
}}>
    Clique aqui
</h2>
```

Agora sim!  
Quando clicarmos no `<h2>`, o React irá atualizar a lista na tela.

---

# Conclusão

O React é reativo, e é por isso que precisamos usar o **state** para fazer as alterações refletirem na tela.




