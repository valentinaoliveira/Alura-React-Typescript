
# Utilizando o `state` em Class Components no React


---

## 🧠 Entendendo o fluxo da aplicação

Antes de tudo, vamos entender como nossa aplicação funciona:

1. Adicionamos uma tarefa e um tempo no formulário.
2. Clicamos em **"Adicionar"** e a tarefa vai para a lista.
3. Na lista, selecionamos a tarefa e o tempo aparece no cronômetro.
4. Iniciamos a atividade e, ao final, ela é marcada como **concluída**.

> Como tudo começa pelo formulário, é por ele que vamos começar também.

---

## 💻 Acessando o arquivo

No VS Code, vá para:

```
src > components > Formulario > index.tsx
```

---

## 🏗️ Criando o `state` em um Class Component

No `function component` usamos Hooks, mas no `class component` já temos o `state` nativamente.

Chamávamos isso antigamente de **Stateful Component**.

Para criar o `state`:

```tsx
state = { 
  tarefa: '',
  tempo: '00:00'
}
```

---

## ⏱️ Controlando o input de tempo

No Chrome, o input do tipo `time` mostra um valor aleatório como "10:14:25". Queremos que ele seja controlado pelo estado.

Atualize o componente:

```tsx
<label htmlFor="tempo">Tempo</label>
<input
  type="time"
  step="1"
  name="tempo"
  value={this.state.tempo}
  onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
  id="tempo"
  min="00:00:00"
  max="01:30:00"
  required
/>
```

> Agora, o campo de tempo é controlado pelo estado e será atualizado sempre que o usuário mudar o valor.

---

## ✏️ Controlando o input de tarefa

Faça o mesmo com o campo de tarefa:

```tsx
<label htmlFor="tarefa">Adicionar um novo estudo</label>
<input
  type="text"
  name="tarefa"
  id="tarefa"
  value={this.state.tarefa}
  onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
  placeholder="O que você quer estudar"
  required
/>
```

> Agora os dois inputs estão controlados pelo `state` do componente.

---

## 🧾 Lidando com o `submit` do formulário

Vamos capturar os dados do formulário quando o usuário clicar em "Adicionar".

### 1. Adicione o evento `onSubmit` no `form`:

```tsx
<form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
```

### 2. Crie a função `adicionarTarefa()`:

```tsx
adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
  evento.preventDefault();
  console.log('state: ', this.state);
}
```

> O `preventDefault()` evita que a página seja recarregada após o `submit`.

---

## ❗ Corrigindo o problema do `this` indefinido

Se o `this` estiver indefinido, o erro será algo como:

```
Cannot read property 'state' of undefined
```

Para corrigir, utilizamos o `.bind(this)` no `onSubmit`:

```tsx
<form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
```

---

## ✅ Resultado

Agora, ao preencher os campos e clicar em "Adicionar", o formulário:

- Não atualiza a página.
- Mostra os dados corretos no `console.log()`.
- Controla os valores dos inputs via `state`.

---


