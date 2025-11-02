# 🧮 Calculator — React + TypeScript + TailwindCSS + Zustand

Простой, быстрый и стильный калькулятор, созданный с использованием **React**, **TypeScript**, **TailwindCSS** и **Zustand**.  
Проект демонстрирует чистую архитектуру, минимализм и скорость разработки благодаря **Vite** и **Bun**.

---

## ✨ Возможности

- 💡 Быстрые математические операции (+, −, ×, ÷, %, ±).  
- ⚡ Состояние через **Zustand** — просто, понятно, без лишнего кода.  
- 🎨 Стили на **TailwindCSS** — гибкий, адаптивный дизайн.  
- 🧱 Полная типизация на **TypeScript**.  
- 🚀 Сборка и запуск на **Vite**.  
- 🍞 Поддержка **Bun** (в проекте есть `bun.lock`).

---

## 🚀 Установка и запуск

Клонируй проект и установи зависимости:

```bash
git clone https://github.com/<your-username>/calculator-ts.git
cd calculator-ts
```

Установи зависимости и запусти проект:

Для npm:

```
npm install
npm run dev
```

Для bun:

```
bun install
bun dev
```

# 📁 Структура проекта

```
calculator-ts/
├─ node_modules/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Button.tsx          # Кнопки интерфейса
│  │  └─ Heading.tsx         # Заголовок приложения
│  ├─ store/
│  │  ├─ counter.types.ts    # Типы для состояния
│  │  └─ counterStore.ts     # Хранилище Zustand
│  ├─ types/
│  │  └─ interfaces.ts       # Общие интерфейсы TypeScript
│  ├─ utils/
│  │  ├─ addOperator.ts      # Добавление операторов
│  │  ├─ data.ts             # Константы / данные кнопок
│  │  └─ doOperation.ts      # Выполнение вычислений
│  ├─ App.tsx                # Главный компонент
│  ├─ main.tsx               # Точка входа
│  └─ index.css              # Базовые стили
├─ .gitignore
├─ bun.lock
├─ eslint.config.js
├─ index.html
├─ package.json
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

Создано с ❤️ на React + TypeScript + Tailwind + Zustand.
