interface Position {
  row: number;
  col: number;
}

interface GameState {
  board: Board;
  score: number;
  bestScore: number;
  // boardSize: number;
  isGameOver: boolean;
  isVictory: boolean;
}

type Direction = "up" | "down" | "left" | "right";

interface MoveResult {
  board: Board;
  score: number;
  moved: boolean;
}

interface ScoreBoardProps {
  score: number;
  bestScore: number;
}
interface GameStatusProps {
  isVictory: boolean;
  isGameOver: boolean;
}

interface RestartButtonProps {
  onRestart: () => void;
}