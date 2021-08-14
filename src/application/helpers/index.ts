import { constants } from 'application/constants';
import { ESymbols, ESymbolsPositions, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { EAchievements } from 'application/enumerations/achievements';


const addSomeDelayAsync = (milliseconds?: number): Promise<void> => new Promise(resolve => setTimeout(() => { resolve(); }, milliseconds || 1000));

const elementScrollToWithDurationAsync = async (element: HTMLElement, to: number, duration: number): Promise<void> => new Promise(resolve => {
  const start = element.scrollTop;
  const diff = to - start;
  const increment = Math.floor(duration / 100) < 10 ? 10 : Math.floor(duration / 100);
  let currentTime = 0;

  const easeInOutQuad = (crrntTm: number, strt: number, dff: number, drtn: number): number => {
    crrntTm /= drtn / 2;
    if (crrntTm < 1) {
      return dff / 2 * crrntTm * crrntTm + strt;
    }
    crrntTm--;
    return -dff / 2 * (crrntTm * (crrntTm - 2) - 1) + strt;
  };

  const animatedScroll = () => {
    currentTime += increment;
    const currentPosition = easeInOutQuad(currentTime, start, diff, duration);
    element.scrollTop = currentPosition;
    if (currentTime < duration) {
      const delay = setTimeout(() => {
        animatedScroll();
        clearTimeout(delay);
      }, increment);
    } else {
      resolve();
    }
  };

  animatedScroll();
});

const generateRandomNumberBetween = (from: number, to: number): number => {
  if (to <= from) { return from; }
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
};

const generateRandomThresholdNumberForDebugMode = (): number => {
  const minSymbolsCountForRandom = symbolsValuesAsArrayOfNumber.length * 2;
  const maxSymbolsCountForRandom = (symbolsValuesAsArrayOfNumber.length * constants.settings.dataDuplication) - (4 * symbolsValuesAsArrayOfNumber.length);
  const randomThreshold = 10 * Math.ceil(generateRandomNumberBetween(minSymbolsCountForRandom, maxSymbolsCountForRandom) / 10);
  return randomThreshold;
};

const calcTheAchievementsAndPayIt = (position: ESymbolsPositions, achievement: number[]): number => {
  // TOP
  if (position === ESymbolsPositions.TOP) {
    // "3 CHERRY symbols on top line => 2000"
    if (achievement.every(x => x === ESymbols.CHERRY)) {
      return EAchievements.THREE_CHERRY_ONTOP;
    }
  }

  // CENTER
  if (position === ESymbolsPositions.CENTER) {
    // "3 CHERRY symbols on center line => 1000"
    if (achievement.every(x => x === ESymbols.CHERRY)) {
      return EAchievements.THREE_CHERRY_ONCENTER;
    }
  }

  // BOTTOM
  if (position === ESymbolsPositions.BOTTOM) {
    // "3 CHERRY symbols on bottom line => 4000"
    if (achievement.every(x => x === ESymbols.CHERRY)) {
      return EAchievements.THREE_CHERRY_ONBOTTOM;
    }
  }

  // ANY LINE
  // "3 7 symbols on any line => 150"
  if (achievement.every(x => x === ESymbols.SEVEN)) {
    return EAchievements.THREE_SEVEN_ONANY;
  }

  // "3 3xBAR symbols on any line => 50"
  if (achievement.every(x => x === ESymbols.THREEXBAR)) {
    return EAchievements.THREE_3xBAR_ONANY;
  }

  // "3 2xBAR symbols on any line => 20"
  if (achievement.every(x => x === ESymbols.TWOXBAR)) {
    return EAchievements.THREE_2xBAR_ONANY;
  }

  // "3 BAR symbols on any line => 10"
  if (achievement.every(x => x === ESymbols.BAR)) {
    return EAchievements.THREE_BAR_ONANY;
  }

  // "Any combination of CHERRY and 7 on any line => 75"
  if (achievement.includes(ESymbols.CHERRY) && achievement.includes(ESymbols.SEVEN)) {
    return EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY;
  }

  // "Combination of any BAR symbols on any line => 5"
  if (achievement.includes(ESymbols.BAR) && achievement.includes(ESymbols.TWOXBAR) && achievement.includes(ESymbols.THREEXBAR)) {
    return EAchievements.COMBINATION_ALLBARS_ONANY;
  }

  // else, "Game Over"
  return EAchievements.GAME_OVER;
};

export {
  addSomeDelayAsync,
  elementScrollToWithDurationAsync,
  generateRandomNumberBetween,
  generateRandomThresholdNumberForDebugMode,
  calcTheAchievementsAndPayIt,
};
