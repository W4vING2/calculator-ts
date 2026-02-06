# Calculator — React + TypeScript + Tailwind + Framer Motion

Современный калькулятор с цепочкой вычислений, предпросмотром результата и анимированным интерфейсом в стиле glassmorphism.

## Возможности

- Последовательные операции (`2 + 2 + 2 + 2`)
- Отображение полной цепочки выражения
- Предпросмотр результата до нажатия `=`
- Поддержка клавиатуры
- Десятичные числа, `C` и `DEL`
- Защита от некорректного ввода (двойные операторы, лишние точки)
- Анимации на `framer-motion`

## Технологии

- React + TypeScript
- TailwindCSS
- Framer Motion
- Vite

## Запуск

```bash
npm install
npm run dev
```

или

```bash
bun install
bun run dev
```

## Структура

```
calculator-ts/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  ├─ components/
│  │  ├─ Calculator.tsx
│  │  ├─ Display.tsx
│  │  └─ Keypad.tsx
│  ├─ data/
│  │  └─ buttons.ts
│  ├─ hooks/
│  │  ├─ calculatorCore.ts
│  │  ├─ calculatorEvaluate.ts
│  │  ├─ calculatorTypes.ts
│  │  └─ useCalculator.ts
│  └─ utils/
│     └─ calc.ts
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ tsconfig*.json
└─ vite.config.ts
```

## Горячие клавиши

- `0-9` — ввод цифр
- `.` — десятичная точка
- `+ - * /` — операции
- `Enter` или `=` — вычислить
- `Backspace` — удалить
- `Escape` — очистить
