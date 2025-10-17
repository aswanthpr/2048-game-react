# 🎮 2048 Game (React + TypeScript)

A modern and fully functional implementation of the classic **2048 puzzle game**, built with **React**, **TypeScript**.  
The goal is simple — combine tiles with the same number to reach **2048!**

---

## 🚀 Features

- 🎲 **4x4 Game Board** — Classic grid layout with smooth tile movement.  
- 🔢 **Random Tile Generation** — Two tiles appear randomly at the start and after every valid move.  
- ⬆️ **Move Controls** — Use keyboard arrow keys to move tiles (Up, Down, Left, Right).  
- 💥 **Tile Merging** — Tiles with the same number merge into one with double the value.  
- 🧠 **Game State Management** — Built with a functional, state-driven architecture using TypeScript.  
- 🏆 **Score Tracking** — Real-time score updates and persistent best score (saved in localStorage).  
- 😎 **Responsive UI** — Clean, minimal, and mobile-friendly layout styled with TailwindCSS.  
- 🔄 **New Game** — Restart the game anytime with a single click.  
- 🧩 **Modular Codebase** — Separated logic for board creation, movement, and merging to ensure maintainability.  

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | React |
| Language | TypeScript |
| Styling | TailwindCSS |
| State Management | React Hooks |
| Build Tool | Vite / Create React App (depending on setup) |

---

## 📂 Project Structure

2048-game/
```
└── src
    └── assets
        ├── react.svg
    └── components
        ├── Board.tsx
        ├── GameStatus.tsx
        ├── RestartButton.tsx
        ├── ScoreBoard.tsx
    └── constants
        ├── const.values.ts
    └── game
        ├── logic.ts
    └── page
        ├── MainPage.tsx
    └── state
        ├── game.reducer.ts
    └── types
        ├── interface.d.ts
        ├── types.d.ts
    └── utils
        ├── storage.ts
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/2048-react-ts.git
cd 2048-react-ts
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

---

## 🎮 How to Play

- Use Arrow Keys (↑ ↓ ← →) to move tiles.
- When two tiles with the same number collide, they merge into one.
- Each merge increases your score.
- Try to create a 2048 tile to win!

---

## 📝 License

This project is licensed under the MIT License — feel free to use and modify it.

---