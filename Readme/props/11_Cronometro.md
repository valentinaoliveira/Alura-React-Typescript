
## 🕒 Estrutura do Componente `Cronometro` com `Relogio`

### 1. Criação do componente `Cronometro`

Crie a pasta:  
```bash
src/components/Cronometro
```

Dentro da pasta, crie o arquivo `index.tsx`:

```tsx
export function Cronometro() {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
    </div>
  );
}
```

### 2. Adicionando o botão "Começar"

Importe o botão:

```tsx
import Botao from '../Botao';
```

Atualize o componente:

```tsx
export function Cronometro() {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        {/* Relógio será inserido aqui */}
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  );
}
```

---

## 🕰️ Criando o componente `Relogio`

Crie a estrutura de pastas:

```bash
src/components/Cronometro/Relogio
```

E o arquivo `index.tsx` dentro da pasta `Relogio`:

```tsx
export function Relogio() {
  return (
    <span>0</span>
    <span>0</span>
    <span>:</span>
    <span>0</span>
    <span>0</span>
  );
}
```

### ❗ Corrigindo erro de múltiplos elementos sem pai

Utilize `Fragment` para envolver os elementos:

```tsx
export default function Relogio() {
  return (
    <>
      <span>0</span>
      <span>0</span>
      <span>:</span>
      <span>0</span>
      <span>0</span>
    </>
  );
}
```

---

## 🔗 Integração do `Relogio` no `Cronometro`

Atualize o `index.tsx` do `Cronometro`:

```tsx
import Relogio from './Relogio';
import Botao from '../Botao';

export default function Cronometro() {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  );
}
```

---

## 🧩 Integrando no app

No arquivo `pages/app.tsx`, adicione:

```tsx
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <>
      <Lista />
      <Cronometro />
    </>
  );
}
```

---

## 🎨 Estilizando com CSS Modules

### `Cronometro.module.scss`

Crie dentro de `src/components/Cronometro`:

```bash
Cronometro.module.scss
```

Importe e aplique estilos:

```tsx
import style from './Cronometro.module.scss';

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
}
```

---

### `Relogio.module.scss`

Crie dentro de `Relogio`:

```bash
Relogio.module.scss
```

Importe e use:

```tsx
import style from './Relogio.module.scss';

export default function Relogio() {
  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}
```

---

## ✅ Conclusão

- Componentes organizados
- Uso de props e boas práticas
- CSS Modules aplicados
- Botão reutilizado com sucesso

Mas **ainda está tudo estático**!  


