#Contador de Hors/Minutos/Segundos

Este projeto é feito com o intuito de aprender REACT em TYPE SCRIPT, com o curso do Alura REACT-TYPESCRIPT. 
O primeiro passo seria ver se ja tem instalado em sua maquina o nodejs e o npm. Para vermos isso podemos utilizar os seguintes codigos 

NodeJs

node -v

NPM

npm -v

Caso não apareça a versão, não tem esse programas intalados na sua maquina, então você pode acessar a documentação do Nodejs pelo site deles mesmo e instalar seguindo o que foi pedido, e se deve fazer o mesmo com o NPM

Utilizaremos o NPM para criar o REACT, então no site você pode pesquisar CREAT REACT APP ou acessar o link abaixo 
http://create-react-app.dev/docs/getting-started/
E seguir o que é pedido 

No terminal do gitBash você vai dar o seguinte comando 

Para criar o projeto 
npx create-react-app my-app

npx: Executa pacotes npm sem instalá-los globalmente.

create-react-app: Ferramenta oficial para criar projetos React rapidamente.

my-app: Nome do diretório onde o projeto será criado

Para entrar no diretorio 

cd my-app

cd (change directory): Comando usado para navegar até a pasta do projeto recém-criado.

my-app: Nome do diretório que foi criado na etapa anterior.

Iniciar o servidor 

npm start

npm: Gerenciador de pacotes do Node.js.

start: Script definido no package.json que executa o React no modo de desenvolvimento.

E assim no terminal ira aparecer um link, basta clicar ctrl+apertar no link, que sera aberto no navegador e voce tera acesso ao projeto 

Dentro da pasta src/:
App.css: Estilos da aplicação.

App.test.tsx: Testes automatizados do componente App.

App.tsx: Componente principal da aplicação React.

index.css: Estilos globais.

index.tsx: Ponto de entrada da aplicação, onde o App é renderizado.

logo.svg: Imagem/logo usada no projeto.

react-app-env.d.ts: Declarações de tipo do React para o TypeScript.

reportWebVitals.ts: Mede performance da aplicação (opcional).

setupTests.ts: Configuração de testes (usado com Jest, por exemplo).

Fora da src/:
.gitignore: Arquivos/pastas que o Git deve ignorar.

package-lock.json: Trava versões exatas das dependências instaladas.

package.json: Lista dependências, scripts e configs do projeto.

README.md: Explicações/documentação do projeto.

tsconfig.json: Configuração do TypeScript.


# Explicação da Estrutura de Pastas e Criação de Componentes no React

Antes de criarmos o nosso primeiro componente, vamos entender essa última pasta, que eu não expliquei no vídeo anterior, a pasta **"public"**.

## Pasta "public"

O único detalhe que alteraremos nela é o `index.html`. Ele é, literalmente, o HTML da página e possui vários arquivos e alguns comentários que podemos até retirar, além do `<title>` do nosso HTML, que é o **React App**. Se retornarmos ao Google Chrome, aparecerá "React App", portanto, é exatamente esse `<title>`.

Ao alterarmos "React App" para "Alura Studies", isto é, `<title>Alura Studies</title>`, apertar "Ctrl + S" e voltar ao Google, aparecerá "Alura Studies". Isso significa que esse é o HTML da nossa página. Ele tem apenas uma `div id="root"></div>` no `index.html` e é exatamente o que desejamos que tenha.

No `index.tsx`, que é parte da pasta **"src"**, há um `ReactDOM.render()`, e ele pega o id 'root'. Ou seja, `document.getElementById('root')`. Dentro desse id 'root', ele joga todo o nosso React, e essa é, basicamente, a função da pasta **public**.

Ainda na pasta **public**, temos o ícone que está sendo usado: `favicon.ico`, as logos: `logo192.png` e `logo512.png`, para caso seja necessário renderizar outra coisa.

Também temos o `manifest.json` que mostra: se o tamanho for "512x512", use determinada logo. E o `robots.txt`, com a função de mostrar aos robôs do Google quais pastas desejamos que sejam indexadas nos arquivos de busca ou o que não queremos que tenha. Se temos uma tela de "Admin", por exemplo, e não planejamos que ela apareça no Google, então colocamos no `robots.txt`.

## Criando o Nosso Componente

Agora, vamos criar o nosso componente. Para isso, criaremos uma pasta chamada **"components"** dentro de **"src"**. Esse passo não é obrigatório, mas como o React nos libera tudo, de maneira que conseguimos colocar os nossos componentes em qualquer pasta, o ideal é ter uma padronização de como criaremos os nossos componentes para não termos problemas no futuro, quando o projeto ficar maior. Por exemplo, não conseguir encontrar os nossos componentes ou eles estarem todos na mesma pasta.

Sendo assim, nós criaremos a pasta **"components"** e, dentro dela, outra pasta chamada **"Botao"** e, dentro dela, um arquivo **index.tsx** que será o nosso componente. Nele, usaremos **class components**, a primeira maneira de criar um componente que, geralmente, aprendemos.

### Passos para Criar o Botão

#### Passo 2: Importação do React

```tsx
import React from 'react';
Passo 3: Criação da Classe Botao
tsx
Copiar
Editar
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
A Forma Correta de Renderizar o Componente
Agora, copie o nome do componente Botao e vá para o arquivo App.tsx. Ao invés de Hello World, importaremos o nosso botão:

tsx
Copiar
Editar
import Botao from './components/Botao';
Para renderizar esse botão, se colocarmos, por exemplo, uma chave, conseguiremos escrever JavaScript dentro dela. Para tanto, colocaremos {Botao} e testar se será possível executá-lo assim.

Voltaremos à página e perceberemos que ele não renderizou nada. Vamos tentar executá-lo como se fosse uma função: {Botao()}. Prontamente, ele nos apresenta erro. Indo à página, podemos conferir que, de fato, não funciona.

A Forma Correta de Renderizar o Componente
A forma mais comum de renderizar um componente no React é renderizá-lo como se fosse uma tag HTML. Precisamos tirar as chaves, abrir uma tag, colocar o botão e os sinais de barra e maior: <Botao />, garantindo abrir e fechar a tag.

O código ficará assim:

tsx
Copiar
Editar
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
Ao voltar para a página, o nosso "Botão" será exibido corretamente.

Boas Práticas no React
Após termos criado o componente, vamos abordar duas boas práticas bastante conhecidas no React.

DRY - "Don't Repeat Yourself"
Isso significa que, ao criar o componente, não é necessário ficar reescrevendo o código. Podemos, simplesmente, criar um botão e reaproveitá-lo em qualquer parte da aplicação. Esse é um ótimo benefício do React.

SRP - "Single Responsibility Principle"
Esse princípio significa que, se queremos um botão e um formulário que têm apenas a responsabilidade de gerenciar o próprio formulário, podemos criar um componente só para o formulário e o botão será outro componente com a responsabilidade única de renderizar um botão. Isso nos ajuda a manter o código desacoplado, com a responsabilidade bem distribuída entre os componentes.