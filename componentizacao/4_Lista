# 🌟 Criando o Componente de Lista (`Lista`)

## ✅ O que foi feito de novo nesta etapa

Nesta fase do projeto, avançamos para a **criação de um novo componente chamado `Lista`**, que será responsável por exibir os estudos/tarefas do dia. Aqui estão as principais novidades e mudanças:

---

### 📁 1. Criação de uma nova pasta e arquivo

Criamos a estrutura do novo componente:

```
src/
└── components/
    └── Lista/
        └── index.tsx
```

---

### 🔄 2. Utilização de Function Component

Diferente do componente `Formulario`, que foi criado como **Class Component**, o componente `Lista` foi escrito usando **Function Component**, que é a abordagem mais moderna no React.

**ANTES (Class Component):**
```tsx
class Formulario extends React.Component {
  render() {
    return (
      ...
    );
  }
}
```

**AGORA (Function Component):**
```tsx
function Lista() {
  return (
    ...
  );
}
```

- 🔹 **Motivo da mudança**: A partir da versão 16.8 do React, com o surgimento dos **Hooks**, os function components passaram a suportar estado e efeitos colaterais, tornando-se a abordagem preferida.

---

### 🧠 3. Conceitos: Stateless x Stateful Components

Foi discutido o conceito de:
- **Stateless Component** (sem estado), como:
  ```tsx
  const Item = () => (
    <li>item...</li>
  );
  ```
- **Stateful Component** (com estado), que antes era possível apenas com classes.

Hoje, **function components com hooks** podem ter estado, tornando os class components obsoletos.

---

### 🧱 4. Estrutura HTML do componente `Lista`

Foi criado o seguinte JSX:

```tsx
function Lista() {
  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        <li>
          <h3>React</h3>
          <span>02:00:00</span>
        </li>
        <li>
          <h3>Javascript</h3>
          <span>01:00:00</span>
        </li>
      </ul>
    </aside>
  );
}
```

- 📌 **Tags utilizadas**:
  - `<aside>`: Semântica de conteúdo complementar.
  - `<h2>`: Título da seção de estudos.
  - `<ul>`: Lista não ordenada.
  - `<li>`: Cada item representa uma tarefa com título (`<h3>`) e duração (`<span>`).

---

### 🔗 5. Integração com `App.tsx`

Foi feita a **importação e renderização do componente `Lista`** no arquivo `App.tsx`:

```tsx
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  );
}
```

---


