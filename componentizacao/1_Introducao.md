
# Contador de Horas/Minutos/Segundos

Este projeto foi desenvolvido com o objetivo de aprender **React com TypeScript**, seguindo o curso da **Alura: React com TypeScript**.

## Pré-requisitos

Antes de iniciar, é necessário verificar se o **Node.js** e o **NPM** estão instalados na sua máquina.

### Verificando a versão do Node.js

```bash
node -v
```

### Verificando a versão do NPM

```bash
npm -v
```

Se as versões não forem exibidas, você precisará instalá-los. Acesse a [documentação do Node.js](https://nodejs.org/) e siga as instruções de instalação. O NPM geralmente é instalado junto com o Node.js.

## Criando o Projeto com Create React App

Usaremos o NPM para criar o projeto React.

Acesse o [Create React App](http://create-react-app.dev/docs/getting-started/) e siga as instruções. No terminal (como o Git Bash, por exemplo), execute:

```bash
npx create-react-app my-app --template typescript
```

Explicação:

- `npx`: Executa pacotes npm sem instalá-los globalmente.
- `create-react-app`: Ferramenta oficial para criar projetos React rapidamente.
- `my-app`: Nome do diretório do projeto.
- `--template typescript`: Configura o projeto com TypeScript.

### Entrando no diretório do projeto

```bash
cd my-app
```

### Iniciando o servidor de desenvolvimento

```bash
npm start
```

Após isso, o terminal exibirá um link. Pressione `Ctrl + clique` para abrir o navegador com o projeto rodando.

---

## Estrutura de Pastas

### Dentro da pasta `src/`:

- `App.css`: Estilos da aplicação.
- `App.test.tsx`: Testes do componente App.
- `App.tsx`: Componente principal da aplicação.
- `index.css`: Estilos globais.
- `index.tsx`: Ponto de entrada da aplicação.
- `logo.svg`: Logo padrão.
- `react-app-env.d.ts`: Tipagens React + TypeScript.
- `reportWebVitals.ts`: Mede performance da aplicação.
- `setupTests.ts`: Configuração para testes (ex: Jest).

### Fora da pasta `src/`:

- `.gitignore`: Arquivos ignorados pelo Git.
- `package-lock.json`: Versões exatas das dependências.
- `package.json`: Configurações, scripts e dependências.
- `README.md`: Documentação do projeto.
- `tsconfig.json`: Configuração do TypeScript.

---

## Pasta `public/`

É onde está o arquivo HTML principal, o `index.html`, que contém:

- A `<div id="root"></div>` onde o React será renderizado.
- O `<title>React App</title>`, que pode ser alterado, por exemplo, para `<title>Alura Studies</title>`.

Outros arquivos:

- `favicon.ico`: Ícone da aba do navegador.
- `logo192.png` e `logo512.png`: Logos para diferentes resoluções.
- `manifest.json`: Instruções de ícones e temas para PWA.
- `robots.txt`: Define o que será indexado pelos buscadores.

---
