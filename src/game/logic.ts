//  Creates an empty board 
export const createEmptyBoard = (size: number): Board => {
  return Array.from({ length: size }, () => Array(size).fill(0));
};

// Gets all empty positions on the board

export const getEmptyPositions = (board: Board): Position[] => {
  const emptyPositions: Position[] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 0) {
        emptyPositions.push({ row: rowIndex, col: colIndex });
      }
    });
  });
  return emptyPositions;
};

//  Adds a random tile (2 or 4) to an empty position

export const addRandomTile = (board: Board): Board => {
  const emptyPositions = getEmptyPositions(board);
  if (emptyPositions.length === 0) return board;

  const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  const newValue = Math.random() < 0.9 ? 2 : 4;

  return board.map((row, rowIndex) =>
    row.map((cell, colIndex) =>
      rowIndex === randomPosition.row && colIndex === randomPosition.col ? newValue : cell
    )
  );
};

//  Initializes a new board 
export const initializeBoard = (size: number = 4): Board => {
  let board = createEmptyBoard(size);
  board = addRandomTile(board);
  board = addRandomTile(board);
  return board;
};

// Slides and merges a single row to the left

const slideAndMergeRow = (row: Tile[]): { row: Tile[]; score: number } => {
  // Filter zeros
  const nonZero = row.filter(tile => tile !== 0);

  let score = 0;
  const merged: Tile[] = [];

  for (let i = 0; i < nonZero.length; i++) {
    if (i < nonZero.length - 1 && nonZero[i] === nonZero[i + 1]) {
      // Merge tiles
      const mergedValue = nonZero[i] * 2;
      merged.push(mergedValue);
      score += mergedValue;
      i++; 
    } else {
      merged.push(nonZero[i]);
    }
  }

  // Pad with zeros
  while (merged.length < row.length) {
    merged.push(0);
  }

  return { row: merged, score };
};

// Rotates board 90 degrees clockwise

const rotateClockwise = (board: Board): Board => {
  const size = board.length;
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => board[size - 1 - col][row])
  );
};

// Rotates board 90 degrees counter-clockwise

const rotateCounterClockwise = (board: Board): Board => {
  const size = board.length;
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => board[col][size - 1 - row])
  );
};

// Moves and merges tiles in the specified direction

export const move = (board: Board, direction: Direction): MoveResult => {
  let workingBoard = board.map(row => [...row]);
  let totalScore = 0;

  // Transform board based on direction to always slide left
  switch (direction) {
    case 'up':
      workingBoard = rotateCounterClockwise(workingBoard);
      break;
    case 'down':
      workingBoard = rotateClockwise(workingBoard);
      break;
    case 'right':
      workingBoard = workingBoard.map(row => [...row].reverse());
      break;
  }

  // Slide and merge each row
  const processedBoard = workingBoard.map(row => {
    const result = slideAndMergeRow(row);
    totalScore += result.score;
    return result.row;
  });

  // Transform back to original orientation
  let finalBoard = processedBoard;
  switch (direction) {
    case 'up':
      finalBoard = rotateClockwise(finalBoard);
      break;
    case 'down':
      finalBoard = rotateCounterClockwise(finalBoard);
      break;
    case 'right':
      finalBoard = finalBoard.map(row => [...row].reverse());
      break;
  }

  // Check if any tiles moved
  const moved = !boardsEqual(board, finalBoard);

  return {
    board: finalBoard,
    score: totalScore,
    moved,
  };
};

// Checks if two boards are equal

const boardsEqual = (board1: Board, board2: Board): boolean => {
  return board1.every((row, rowIndex) =>
    row.every((cell, colIndex) => cell === board2[rowIndex][colIndex])
  );
};

// Checks if any valid moves are available

export const hasValidMoves = (board: Board): boolean => {
  // Check for empty cells
  if (getEmptyPositions(board).length > 0) return true;

  // Check for adjacent matching tiles
  const size = board.length;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const current = board[row][col];
      // Check right neighbor
      if (col < size - 1 && board[row][col + 1] === current) return true;
      // Check bottom neighbor
      if (row < size - 1 && board[row + 1][col] === current) return true;
    }
  }

  return false;
};

// Checks victory
export const hasWon = (board: Board): boolean => {
  return board.some(row => row.some(tile => tile === 2048));
};
