# Criando o Componente de Formulário em React (Class Component)

Agora que você já sabe como criar um componente de botão, vamos construir um **formulário** reutilizável, utilizando os mesmos princípios. Ele será criado **em um novo arquivo separado**, seguindo as boas práticas de componentização do React.

---

## ✅ Etapas para Criar o Formulário

### 1. Estrutura de Pastas
Dentro da pasta `src/components`, crie uma nova pasta chamada `Formulario`, com o seguinte caminho:

```
src/
└── components/
    ├── Botao/
    │   └── index.tsx
    └── Formulario/
        └── index.tsx
```

---

### 2. Criando o Arquivo `Formulario/index.tsx`

```tsx
import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
```

---

### 3. Alterando o `App.tsx`
Agora que criamos o componente `Formulario`, podemos usá-lo no lugar do `Botao`, pois ele já renderiza o botão internamente.

**ANTES:**
```tsx
import Botao from './components/Botao';

function App() {
  return (
    <div className="App">
      <Botao />
    </div>
  );
}
```

**DEPOIS:**
```tsx
import React from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
```

---

## ℹ️ Explicações Importantes

### ✨ Reutilização de Componentes
- O componente `Botao` já foi criado previamente e está sendo reutilizado dentro do `Formulario`.

### 🔎 Sobre `htmlFor`
- O atributo `htmlFor` no `<label>` permite que, ao clicar no texto do label, o `input` seja focado automaticamente.

### 🔹 Atributos do Input
- `type="time"`, `step="1"`: permitem controle fino sobre a entrada de tempo.
- `required`: garante que o campo precisa ser preenchido antes de enviar.
- `min` e `max`: limitam o intervalo de tempo permitido.

---

## ✅ O Que Mudou em Relação ao Projeto Anterior:
- Criamos **um novo componente** separado chamado `Formulario`.
- Adicionamos **dois campos de input** com validação.
- Reutilizamos o **componente `Botao`** dentro do novo componente.
- Substituímos a renderização do botão no `App.tsx` pela renderização do `Formulario`.

---



