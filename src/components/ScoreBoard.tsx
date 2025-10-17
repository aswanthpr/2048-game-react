export const ScoreBoard = ({ score, bestScore }: ScoreBoardProps) => (
  <div className="flex gap-4 justify-center">
    <div className="score-box bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded-lg shadow-lg">
      <div className="text-sm font-semibold uppercase tracking-wide">Score</div>
      <div className="text-xl font-bold">{score}</div>
    </div>
    <div className="score-box bg-transparent text-emerald-300 px-4 py-2 rounded-lg shadow-lg border border-emerald-300">
      <div className="text-sm font-semibold uppercase tracking-wide">Best</div>
      <div className="text-xl font-bold">{bestScore}</div>
    </div>
  </div>
);
