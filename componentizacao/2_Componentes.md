# Componentização com React

Dentre todas as vantagens que o React nos proporciona, a **componentização** é uma das mais conhecidas, além de ser uma das marcas do React.

---

## Criando o Primeiro Componente

Vamos criar uma pasta chamada `components` dentro de `src`, e dentro dela, uma pasta chamada `Botao`, contendo um arquivo `index.tsx`.

**Estrutura:**
```bash
src/
└── components/
    └── Botao/
        └── index.tsx
```

**Código do componente Botao:**
```tsx
import React from 'react';

class Botao extends React.Component {
  render() {
    return (
      <button>
        Botão
      </button>
    );
  }
}

export default Botao;
```

---

## Usando o Componente no `App.tsx`

No arquivo `App.tsx`, importe o componente e o utilize:

```tsx
import React from 'react';
import Botao from './components/Botao';

function App() {
  return (
    <div className="App">
      <Botao />
    </div>
  );
}

export default App;
```

> ⚠️ **Dica:** Renderize o componente como uma tag HTML (`<Botao />`), **não** como função (`{Botao()}`) ou como variável (`{Botao}`).

---

## Boas Práticas com Componentes

### DRY - Don't Repeat Yourself
Evite repetir código. Crie componentes reutilizáveis, como um botão que pode ser usado em várias partes da aplicação.

### SRP - Single Responsibility Principle
Cada componente deve ter uma única responsabilidade. Por exemplo, um componente para botão só deve se preocupar com o botão. Um formulário deve ser um componente separado.

---

## Vamos entender melhor o que está acontecendo?

Com esse pequeno componente `Botao`, podemos explorar várias informações importantes sobre componentização (em geral) e também especificamente sobre **class components**.

---

## Sobre Componentização

### Nome do Componente
O nome do componente deverá começar com letra maiúscula. Por quê?

Existe uma possibilidade no HTML de criar **web-components**, que nos permite criar tags HTML totalmente customizadas. Entre essas customizações, podemos customizar o nome da tag!

Para o React diferenciar um componente de um web-component, ele exige que o nome do componente comece com letra maiúscula. Assim ele consegue distinguir, por exemplo, que `<meuBotao />` é um web-component e `<MeuBotao />` é um componente React!

### `return` e JSX

Para podermos criar um componente, além da regra do nome, precisamos **retornar JSX**. Mas o que seria isso exatamente?

JSX é uma forma de "escrever HTML no JS". Apesar de parecer HTML, o que o React faz por trás dos panos é transformar o JSX em código JavaScript puro:

```js
const Botao = React.createElement('button', {}, 'Botão');
```

Ou seja, JSX é transformado em chamadas a `React.createElement`, que por fim serão renderizadas no DOM e convertidas em HTML visível.

Outro detalhe importante é que **todo componente precisa retornar um único elemento pai**. O seguinte exemplo **não funcionará**:

```tsx
class Botao extends React.Component {
  render() {
    return (
      <p>Título do Botão</p>
      <button>
        Botão
      </button>
    )
  }
}
```

Se precisar de múltiplos elementos, utilize `React.Fragment` ou `<> ... </>` para envolvê-los.

---

## Sobre Class Components

### `React.Component` e `render`

Para criar um componente com classes (class components), é necessário **estender `React.Component`**. Essa classe fornece o método obrigatório `render`, que retorna o JSX do componente.

```tsx
class Botao extends React.Component {
  render() {
    return (
      <button>
        Botão
      </button>
    )
  }
}
```

Esse é o jeito tradicional de criar componentes antes da chegada dos **function components** com **Hooks**, que são mais utilizados atualmente. Porém, entender `class components` é essencial para compreender a evolução do React.

---

