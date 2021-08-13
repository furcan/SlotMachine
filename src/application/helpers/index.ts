import { constants } from 'application/constants';
import { symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';

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

const generateRandomNumberBetween = (from: number, to: number): number => Math.floor(Math.random() * (to + 1)) + from;

const generateRandomThresholdNumberForDebugMode = (): number => {
  const minSymbolsCountForRandom = symbolsValuesAsArrayOfNumber.length * 2;
  const maxSymbolsCountForRandom = (symbolsValuesAsArrayOfNumber.length * constants.settings.dataDuplication) - (4 * symbolsValuesAsArrayOfNumber.length);
  const randomThreshold = 10 * Math.ceil(generateRandomNumberBetween(minSymbolsCountForRandom, maxSymbolsCountForRandom) / 10);
  return randomThreshold;
};

export {
  addSomeDelayAsync,
  elementScrollToWithDurationAsync,
  generateRandomNumberBetween,
  generateRandomThresholdNumberForDebugMode,
};
