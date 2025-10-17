type Tile = number;
type Board = Tile[][];
type GameAction =
  | { type: 'MOVE'; direction: Direction }
  | { type: 'RESTART' }