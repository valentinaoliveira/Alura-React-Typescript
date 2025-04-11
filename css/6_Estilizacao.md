**Estilização em React: Inline Style, Variáveis e Alternativas**

Com a maioria dos componentes já prontos em HTML, chegou o momento de estilizá-los. A seguir, exploramos as formas de estilização no React, partindo do exemplo mais simples: o componente `Botao`.

---

### 1. Estilização Inline

O `inline style` é a forma mais simples de estilizar um componente, embora não seja a mais recomendada. Em JSX, o atributo `style` recebe um objeto JavaScript, não uma string como no HTML.

```jsx
import React from 'react';

class Botao extends React.Component {
    render() {
        return (
            <button style={{ backgroundColor: 'blue' }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

---

### 2. Usando Variáveis

Podemos utilizar variáveis para definir os estilos, tornando o código mais dinâmico:

```jsx
const color = 'red';
<button style={{ backgroundColor: color }}>Botão</button>
```

Ou ainda:

```jsx
const backgroundColor = 'red';
<button style={{ backgroundColor }}>Botão</button>
```

---

### 3. Externalizando o Objeto de Estilo

Criar uma constante com um objeto de estilos ajuda na organização do código:

```jsx
const backgroundColor = 'green';
const styles = { backgroundColor };
<button style={styles}>Botão</button>
```

---

### 4. Usando Condicional (Ternário)

É possível condicionar o estilo com uma expressão ternária:

```jsx
const estaAtivo = true;
const styles = {
    backgroundColor: estaAtivo ? 'green' : 'red'
};
<button style={styles}>Botão</button>
```

---

### 5. CSS Externo

Importar um arquivo CSS diretamente no componente é uma forma comum, mas pode causar sobreposições de estilo:

```jsx
import './index.css';
```

---

### 6. Alternativas Recomendadas

#### Sass
Permite escrever CSS de forma mais organizada com aninhamentos:

```scss
.component {
    div {
        p {
            span {
                color: blue;
            }
        }
    }
}
```

#### CSS Modules
Permite isolar os estilos por componente, evitando conflitos.

#### CSS-in-JS
Estilos são definidos diretamente no JS. O `styled-components` é uma biblioteca bastante usada para isso.

---

### Conclusão

React é altamente dinâmico para aplicações de estilo. Embora o `inline style` funcione, é preferível usar CSS modules, Sass ou bibliotecas de CSS-in-JS como boas práticas para manutenção e escalabilidade.

**Estilização em React: Inline Style, Variáveis e Alternativas**

Com a maioria dos componentes já prontos em HTML, chegou o momento de estilizá-los. A seguir, exploramos as formas de estilização no React, partindo do exemplo mais simples: o componente `Botao`.

---

### 1. Estilização Inline

O `inline style` é a forma mais simples de estilizar um componente, embora não seja a mais recomendada. Em JSX, o atributo `style` recebe um objeto JavaScript, não uma string como no HTML.

```jsx
import React from 'react';

class Botao extends React.Component {
    render() {
        return (
            <button style={{ backgroundColor: 'blue' }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

---

### 2. Usando Variáveis

Podemos utilizar variáveis para definir os estilos, tornando o código mais dinâmico:

```jsx
const color = 'red';
<button style={{ backgroundColor: color }}>Botão</button>
```

Ou ainda:

```jsx
const backgroundColor = 'red';
<button style={{ backgroundColor }}>Botão</button>
```

---

### 3. Externalizando o Objeto de Estilo

Criar uma constante com um objeto de estilos ajuda na organização do código:

```jsx
const backgroundColor = 'green';
const styles = { backgroundColor };
<button style={styles}>Botão</button>
```

---

### 4. Usando Condicional (Ternário)

É possível condicionar o estilo com uma expressão ternária:

```jsx
const estaAtivo = true;
const styles = {
    backgroundColor: estaAtivo ? 'green' : 'red'
};
<button style={styles}>Botão</button>
```

---

### 5. CSS Externo

Importar um arquivo CSS diretamente no componente é uma forma comum, mas pode causar sobreposições de estilo:

```jsx
import './index.css';
```

---

### 6. Alternativas Recomendadas

#### Sass
Permite escrever CSS de forma mais organizada com aninhamentos:

```scss
.component {
    div {
        p {
            span {
                color: blue;
            }
        }
    }
}
```

#### CSS Modules
Permite isolar os estilos por componente, evitando conflitos.

#### CSS-in-JS
Estilos são definidos diretamente no JS. O `styled-components` é uma biblioteca bastante usada para isso.

---

### Conclusão

React é altamente dinâmico para aplicações de estilo. Embora o `inline style` funcione, é preferível usar CSS modules, Sass ou bibliotecas de CSS-in-JS como boas práticas para manutenção e escalabilidade.

