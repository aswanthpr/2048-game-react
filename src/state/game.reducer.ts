import { BOARD_SIZE } from "../constants/const.values";
import { addRandomTile, hasValidMoves, hasWon, initializeBoard, move } from "../game/logic";
import { getBestScore, saveBestScore } from "../utils/storage";


export const createInitialState = (): GameState => ({
  board: initializeBoard(BOARD_SIZE),
  score: 0,
  bestScore: getBestScore(),
  isGameOver: false,
  isVictory: false,
});

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "MOVE": {
      //if game over return board
      if (state.isGameOver) return state;

      const moveResult = move(state.board, action.direction);

      // If no tiles moved, don't update state
      if (!moveResult.moved) return state;

      // Add random tile after successful move
      const newBoard = addRandomTile(moveResult.board);
      const newScore = state.score + moveResult.score;
      const newBestScore = Math.max(state.bestScore, newScore);

      // Check conditions
      const victory = hasWon(newBoard);
      const gameOver = !hasValidMoves(newBoard);

      
      if (newBestScore > state.bestScore) {
        saveBestScore(newBestScore);
      }

      return {
        ...state,
        board: newBoard,
        score: newScore,
        bestScore: newBestScore,
        isGameOver: gameOver,
        isVictory: victory || state.isVictory,
      };
    }

    case "RESTART": {
      return createInitialState();
    }

    default:
      return state;
  }
};
