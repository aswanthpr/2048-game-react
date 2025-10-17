import { useEffect, useReducer, useCallback } from "react";
import { Board } from "../components/Board";
import { RestartButton } from "../components/RestartButton";
import { ScoreBoard } from "../components/ScoreBoard";
import { GameStatus } from "../components/GameStatus";
import { keyMap } from "../constants/const.values";
import { createInitialState, gameReducer } from "../state/game.reducer";

function MainPage() {
  const [gameState, dispatch] = useReducer(gameReducer, createInitialState());

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      dispatch({ type: "MOVE", direction });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex flex-col">
      {/* Navbar Section */}
      <nav className="w-full flex items-center justify-center px-8 py-4">
        <h1 className="text-6xl font-extrabold text-gray-800">2048</h1>
        
      </nav>

      {/* Centered Game Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Scoreboard */}
        <div className=" flex gap-4">
        <ScoreBoard score={gameState?.score} bestScore={gameState?.bestScore} />

        <RestartButton onRestart={handleRestart}  /> 
        </div>

        {/* Game Container */}
        <div className="game-container max-w-2xl w-full flex flex-col items-center mt-6">
          <Board board={gameState?.board} />
        </div>
        <div className="mt-4">

          <GameStatus
            isVictory={gameState?.isVictory}
            isGameOver={gameState?.isGameOver}
          />
        </div>

        {/* Subtitle / Info */}
        <p className="text-gray-600 text-lg mt-4 text-center px-2">
          Join the tiles to reach{" "}
          <span className="font-bold text-emerald-600">2048!</span>
        </p>
      </main>
    </div>
  );
}

export default MainPage;
