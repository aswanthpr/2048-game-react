import { RotateCcw } from 'lucide-react';

export const RestartButton = ({ onRestart }: RestartButtonProps) => (
  <div className="flex justify-center">
    <button
      onClick={onRestart}
      className="bg-transparent hover:bg-gray-100 border border-gray-400 text-gray-800 px-4 py-3 rounded-lg shadow-lg transition-all duration-150 active:scale-95 flex items-center gap-3 font-semibold text-md"
    > 
      <RotateCcw className='w-6 h-6' />
      Restart
    </button>
  </div>
);
