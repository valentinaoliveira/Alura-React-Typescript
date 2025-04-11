# Renderização Dinâmica de Listas com React e TypeScript

## Introdução

Anteriormente, criamos uma lista de tarefas utilizando `<li>` de forma manual. No entanto, tanto o React quanto o JavaScript nos permitem fazer isso de forma dinâmica, utilizando estruturas como arrays e o método `.map()`. Isso torna o código mais limpo, reutilizável e fácil de manter.

## Situação Inicial

No exemplo anterior:
```jsx
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
```

A estrutura HTML se repetia, mudando apenas os dados. Para evitar essa repetição, utilizamos um array de objetos:

```tsx
function Lista() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    }
  ];
```

## Renderização com `.map()`

Para renderizar cada item dinamicamente, usamos o método `.map()`:

```tsx
<ul>
  {tarefas.map((item, index) => (
    <li key={index}>
      <h3>{item.tarefa}</h3>
      <span>{item.tempo}</span>
    </li>
  ))}
</ul>
```

### Explicação
- **tarefas.map()**: percorre cada item do array.
- **item**: representa o objeto atual.
- **index**: é a posição do item no array.
- **key**: é usada pelo React para identificar elementos únicos na renderização. Idealmente, seria um `id` exclusivo, mas enquanto não há, usamos o `index`.

### Benefícios
- Elimina a repetição de código.
- Facilita a manutenção e atualização.
- Permite a adição dinâmica de tarefas:

```tsx
const tarefas = [
  { tarefa: 'React', tempo: '02:00:00' },
  { tarefa: 'Javascript', tempo: '01:00:00' },
  { tarefa: 'Typescript', tempo: '03:00:00' } // nova tarefa
];
```

### Diferença entre index e id
- **index**: é gerado dinamicamente e pode mudar dependendo da ordenação ou remoção de itens.
- **id**: valor único e estável, ideal para uso como `key`.

### Observações sobre a key
- Não aparece no DOM real.
- É apenas uma referência interna do React para ajudar na renderização eficiente.
- Link para aprofundamento: [[React: otimizando a performance (Alura+)](https://cursos.alura.com.br/course/react-otimizando-performance)]
## Conclusão

Utilizar `.map()` para renderizar listas em React com TypeScript torna o código mais eficiente e reativo. É uma prática essencial para projetos escaláveis, especialmente quando os dados são dinâmicos ou vêm de APIs.

