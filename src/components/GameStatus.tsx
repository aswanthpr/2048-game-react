export const GameStatus = ({ isVictory, isGameOver }: GameStatusProps) => (
  <>
    {isVictory && (
      <div className="bg-emerald-500 text-white px-6  py-4 rounded-lg shadow-lg text-center">
        <div className="text-2xl font-bold">You Win!</div>
        <div className="text-sm mt-1">You reached 2048! Keep playing to beat your best score.</div>
      </div>
    )}
    {isGameOver && (
      <div className="bg-transparent text-red-500 border border-red-400 px-6 py-4 rounded-lg shadow-lg text-center">
        <div className="text-2xl font-bold">Game Over!</div>
        <div className="text-sm mt-1 font-bold">No more valid moves available.</div>
      </div>
    )}
  </>
);
