# Contador de Horas/Minutos/Segundos

Projeto desenvolvido com o intuito de aprender **React com TypeScript**, através do curso da Alura.

---

## 🚀 Requisitos Iniciais

Antes de iniciar, é necessário ter o **Node.js** e o **NPM** instalados em sua máquina.

### Verificando a instalação

No terminal:

```bash
node -v     # Verifica a versão do Node.js
npm -v      # Verifica a versão do NPM
```

Se os comandos não retornarem uma versão, significa que você precisa instalar o Node.js (o NPM será instalado junto).

---

## 🛠 Criando o Projeto React

Utilizaremos o Create React App com TypeScript. Acesse a documentação oficial:

📎 [Create React App - Getting Started](https://create-react-app.dev/docs/getting-started)

No terminal, execute:

```bash
npx create-react-app my-app --template typescript
```

**Explicações:**
- `npx`: Executa pacotes NPM sem instalá-los globalmente.
- `create-react-app`: Ferramenta oficial para inicialização de projetos React.
- `my-app`: Nome da pasta do projeto.
- `--template typescript`: Gera o projeto com suporte ao TypeScript.

Entrar no diretório do projeto:

```bash
cd my-app
```

Iniciar o servidor local:

```bash
npm start
```

O terminal exibirá um link (geralmente `http://localhost:3000`), basta clicar com Ctrl + clique para abrir no navegador.

---

## 🧭 Estrutura de Pastas

### Dentro da pasta `src/`:
- `App.css`: Estilos do App.
- `App.test.tsx`: Testes automatizados.
- `App.tsx`: Componente principal.
- `index.css`: Estilos globais.
- `index.tsx`: Ponto de entrada do app.
- `logo.svg`: Logo da aplicação.
- `react-app-env.d.ts`: Tipagens do React para TypeScript.
- `reportWebVitals.ts`: Métricas de performance (opcional).
- `setupTests.ts`: Configuração de testes (Jest).

### Fora da `src/`:
- `.gitignore`: Itens ignorados pelo Git.
- `package.json`: Dependências e configurações.
- `package-lock.json`: Trava de versões.
- `README.md`: Documentação.
- `tsconfig.json`: Configuração do TypeScript.

### 🌐 Pasta `public/`:
- `index.html`: Único arquivo HTML da aplicação. Contém a `<div id="root"></div>` onde o React será injetado.
- `favicon.ico`, `logo192.png`, `logo512.png`: Ícones e logos do projeto.
- `manifest.json`: Definições para apps PWA.
- `robots.txt`: Define o que deve ser indexado por mecanismos de busca.

> ✍️ Dica: Você pode trocar o `<title>` de "React App" para outro nome, como "Alura Studies".

---

## 🧩 Criando um Componente

### Estrutura recomendada

Na pasta `src/`, crie:

```
src/
└── components/
    └── Botao/
        └── index.tsx
```

Essa estrutura facilita a organização dos componentes, principalmente em projetos maiores.

### Componente Botao

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

## 🧪 Renderizando o Componente

No arquivo `App.tsx`, importe e use o componente assim:

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

> ✅ **Dica**: Componentes React devem ser usados como tags: `<Botao />`, e não como funções `{Botao()}` ou dentro de chaves `{Botao}`.

---

## ✅ Boas Práticas

### DRY - Don't Repeat Yourself
Evite repetir código. Crie componentes reutilizáveis sempre que possível.

### SRP - Single Responsibility Principle
Cada componente deve ter uma única responsabilidade. Exemplo:
- **Botao**: apenas exibe um botão.
- **Formulario**: apenas lida com o formulário.

Essa separação facilita a manutenção e a escalabilidade do projeto.

---

## 🔗 Links úteis

📘 Registro de Aprendizado do Curso

À medida que avanço pelos módulos do curso, irei registrar aqui tudo o que estou aprendendo, bem como as alterações feitas nos códigos.

Abaixo, você encontrará uma lista com os links de cada módulo, organizados em ordem numérica. Dentro de cada módulo estarão os arquivos correspondentes a cada aula, acompanhados de anotações sobre os principais aprendizados.

A numeração antes do nome indica a ordem dos módulos.

- [Componentização](https://github.com/valentinaoliveira/Alura-React-Typescript/tree/componentizacao/componentizacao)
- [Usando CSS](https://github.com/valentinaoliveira/Alura-React-Typescript/tree/feature/css/css)
