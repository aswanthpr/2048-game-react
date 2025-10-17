const BEST_SCORE_KEY = 'game2048-best-score';

//  get best score from localStorage

export const getBestScore = (): number => {
  try {
    const stored = localStorage.getItem(BEST_SCORE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  } catch {
    return 0;
  }
};

//  save best score to localStorage
 
export const saveBestScore = (score: number): void => {
  try {
    localStorage.setItem(BEST_SCORE_KEY, score.toString());
  } catch {
    console.log("error while set data to local storage")
  }
};
