# 🧩 Estilização do Projeto com Sass e Organização de Componentes

## ✅ Objetivo

Neste passo, vamos realizar a estilização completa do nosso projeto React. A estrutura já está bem robusta e próxima da finalização, restando apenas o cronômetro. Nosso foco agora será melhorar o aspecto visual.

---

## 📦 Instalação do Sass

Instalaremos o Sass, um pré-processador CSS, para facilitar a escrita e organização dos estilos.

**Comando:**
```bash
npm install --save-dev sass
```

**Passos:**

1. Abra o terminal com `Ctrl + '` ou vá em `Ver > Terminal`.
2. Cole o comando acima e pressione `Enter`.
3. Após a instalação, o `package.json` terá:
```json
"devDependencies": {
  "sass": "^1.41.1"
}
```
4. Você também verá o pacote no `package-lock.json`, mas não é necessário se preocupar com ele.

---

## 📁 Organização de Arquivos

### 🔄 Reset CSS (`index.css`)

Colamos o conteúdo de reset diretamente no `index.css`. Isso será aplicado globalmente.

- Pressione `Ctrl + S` para salvar e aplicar.

### 📃 Página Principal (`App.tsx`)

Reorganize o arquivo:

1. Mova `App.tsx` para uma pasta chamada `pages`.
2. Atualize o `index.tsx` em `components` para importar App de `./pages/App`.

Corrija os imports dentro de `App.tsx`:
```tsx
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss';
```

Atualize a classe do `<div>`:
```tsx
<div className="AppStyle">
```

---

## 🎨 Estilos dos Componentes

### `App.scss`
- Criar em `src/pages/style.scss`
```scss
.AppStyle {
  display: grid;
  ...
}
```

### `Formulario`
1. Criar `style.scss` em `components/Formulario`
2. Importar no `index.tsx`
3. Adicionar classes:
```tsx
<form className="novaTarefa">
  <div className="inputContainer">
```

### `Botao`
1. Criar `style.scss` em `components/Botao`
2. Importar no `index.tsx`
3. Adicionar classe `botao`:
```tsx
<button className="botao">
```

### `Lista`
1. Criar `style.scss` em `components/Lista`
2. Importar no `index.tsx`
3. Adicionar classe `listaTarefas` no `<aside>`
4. Adicionar classe `item` no `<li>`

---

## 📁 Imagem SVG

1. Criar diretório: `src/assets/img`
2. Adicionar o arquivo `check-mark.svg`
3. No style da lista, alterar a url:
```scss
background-image: url('../../assets/img/check-mark.svg');
```

---

## ⚠️ Aviso sobre `class` x `className`

No React, usamos `className` no lugar de `class`, pois `class` é palavra reservada do JavaScript. Usar `class` gerará alertas.

---

## 🧼 CSS Modules (Próximo passo)

Para evitar conflitos de nomes em grandes projetos, usaremos **CSS Modules**. Isso será abordado na próxima etapa do curso.

---

## 📚 Referências

- [Sass no NPM](https://www.npmjs.com/package/sass)
- Documentação React sobre [className](https://reactjs.org/docs/dom-elements.html#classname)
