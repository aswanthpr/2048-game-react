import { colors } from "../constants/const.values";


const getTileColor = (value: number): string => {
  
  return colors[value] || 'bg-gray-800 text-white';
};


export const Board = ({ board }: { board: Board }) => {

  return (
    <div
      className="board-grid gap-5 p-5 bg-gray-90 border border-gray-300  rounded-2xl shadow-2xl"
      style={{
        display: 'grid',
        gridTemplateColumns:`repeat(4, minmax(0, 1fr))`,
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`tile ${getTileColor(tile)} text-4xl font-bold rounded-lg flex items-center justify-center aspect-square transition-all duration-150 ease-in-out shadow-md w-[120px] h-[120px]`}
          >
            {tile !== 0 && tile}
          </div>
        ))
      )}
    </div>
  );
};
