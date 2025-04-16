

### Separando Responsabilidades

Vamos ver se você concorda comigo. Na nossa aplicação, aparecem **"Estudos do dia"** e, em seguida, a lista. Até aí tudo certo. Mas concorda que essa parte cinza com "React", "Javascript" e "Typescript" **claramente é outro componente**? Ele tem outra responsabilidade.

No VS Code, em `src > components > Lista > index.tsx`, vemos que o código tem o título, o `.map`, a lista de tarefas e a renderização, **mas o `<li>` ainda está aqui dentro**, então tem muita responsabilidade ali: título, lista e o próprio item.

Se é tão fácil criar componentes, por que manter o `item` aqui dentro? Vamos **externalizá-lo**.

---

### Preparando o Novo Componente

1. Volte no formulário e corrija o texto para “Adicionar”.
2. No `index.tsx` de `Lista`, recorte o trecho da `<li>` com `Ctrl + X`.
3. Crie uma pasta chamada `Item` dentro da pasta `Lista`.
4. Dentro da nova pasta `Item`, crie um arquivo `index.tsx`.

---

### Por que dentro de Lista?

Se colocarmos todos os componentes diretamente na pasta `components`, ficará difícil navegar quando a aplicação crescer. Por isso, criamos `Item` dentro de `Lista`, pois ele será usado **somente ali**.

---

### Criando o componente `Item`

```tsx
export default function Item() {
  return (
    <li key={index} className={style.item}>
      <h3>{item.tarefa}</h3>
      <span>{item.tempo}</span>
    </li>
  );
}
```

#### Observações:
- Já usamos `export default function` direto.
- Não é mais necessário importar `React` nas versões 17+.
- No `Lista`, mesmo com `import React`, ele pode estar sendo declarado sem ser usado.

---

### Refatorando Props

No `Item`, ao invés de `item.tarefa` e `item.tempo`, vamos usar diretamente `tarefa` e `tempo`, desestruturando `props`.

#### Forma 1 (usando `props`):
```tsx
export default function Item(props: { tarefa: string; tempo: string }) {
  const { tarefa, tempo } = props;

  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
```

#### Forma 2 (desestruturação direta):
```tsx
export default function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
```

Importe o estilo:
```tsx
import style from '../Lista.module.scss';
```

---

### Usando o novo componente em `Lista`

No `Lista/index.tsx`, substitua o conteúdo do `.map()`:

```tsx
import Item from './Item';

{tarefas.map((item, index) => (
  <Item key={index} {...item} />
))}
```

#### Alternativa:
```tsx
<Item
  key={index}
  tarefa={item.tarefa}
  tempo={item.tempo}
/>
```

---

### Por que usar `{...item}`?

- Transforma todas as chaves do objeto `item` em props.
- Útil quando há muitas propriedades.

⚠️ Se os dados vierem de uma API muito grande, cuidado com propriedades extras não tipadas.

---

### Sobre a `key`

O `key={index}` deve continuar sendo usado **no componente pai**, ou seja, dentro de `Lista`, pois o React utiliza isso para identificar os elementos na renderização.

---

## Conclusão

Com essa separação, estamos aplicando os princípios:

- **DRY**: Don't Repeat Yourself
- **SRP**: Single Responsibility Principle

Agora:
- `Lista` apenas **mapeia e repassa os dados**
- `Item` apenas **renderiza um item**

Esse é o caminho certo para componentes reutilizáveis e bem organizados. 👌
