
## Objetivo

Queremos que o botão seja reutilizável com diferentes textos e funcionalidades:

- No formulário: texto do botão será **"Adicionar"**
- No cronômetro: texto do botão será **"Começar"**

Além disso, as ações que ocorrem ao clicar devem ser diferentes conforme o contexto.

---

## Entendendo Props no React

No React, usamos **props** (propriedades) para enviar informações de um componente pai para um componente filho.

### Exemplo inicial

No `src/components/Formulario/index.tsx`, adicionamos a prop:

```tsx
<Botao texto="Adicionar" />
```

Mas o VS Code aponta erro:

> O tipo '(texto: string;)' não pode ser atribuído ao tipo...

Esse erro é do **TypeScript**, pois estamos usando uma prop (`texto`) sem informar que o componente espera essa prop.

---

## Corrigindo no Componente `Botao`

No arquivo `components/Botao/index.tsx`, ajustamos a tipagem das props:

```tsx
class Botao extends React.Component<{ texto: string }> {
  // código omitido
}
```

E, dentro do método `render()`:

```tsx
{this.props.texto}
```

Agora o botão renderiza corretamente com o texto enviado por props.

---

## Melhorando com `children`

Percebemos que o uso de `texto="Adicionar"` não é o mais natural em JSX. Geralmente usamos:

```tsx
<Botao>Adicionar</Botao>
```

Para isso, modificamos o componente `Botao`:

### Alterar o tipo da prop:

```tsx
class Botao extends React.Component<{ children: React.ReactNode }> {
  // código omitido
}
```

### E no `render()`:

```tsx
{this.props.children}
```

Agora podemos usar o componente assim:

```tsx
<Botao>Adicionar</Botao>
```

---

## Testando

Alteramos o conteúdo dentro da tag `Botao`:

```tsx
<Botao>Banana</Botao>
```

E no navegador, aparece "Banana" no botão, provando que o componente está aceitando o `children`.

---

## Conclusão

- Aprendemos a utilizar **props como atributos** (`texto="..."`)
- E também a utilizar **props como children** (`<Botao>Texto</Botao>`)
- Isso nos permite reutilizar o componente `Botao` de forma mais flexível.

---

## Observação

Se você encontrar erros de tipagem ao usar `children`, reinicie o projeto com:

```bash
npm start
```

---

