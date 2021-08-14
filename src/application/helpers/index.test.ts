import { constants } from 'application/constants';
import { symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { generateRandomNumberBetween, generateRandomThresholdNumberForDebugMode } from 'application/helpers';


describe('Helper functions should be work as epected.', () => {

  // generateRandomNumberBetween(num1, num2);
  it('"generateRandomNumberBetween" should return a number between the arguments:', () => {
    const example1 = generateRandomNumberBetween(1881, 1923);
    expect(example1).toBeGreaterThanOrEqual(1881);
    expect(example1).toBeLessThanOrEqual(1923);

    const example2 = generateRandomNumberBetween(0, 2);
    expect(example2).toBeGreaterThanOrEqual(0);
    expect(example2).toBeLessThanOrEqual(2);

    const example3 = generateRandomNumberBetween(2923, 1923);
    expect(example3).toBe(2923);

    const example4 = generateRandomNumberBetween(1923, 1924);
    expect(example4).toBeGreaterThanOrEqual(1923);
    expect(example4).toBeLessThanOrEqual(1924);
  });

  // generateRandomThresholdNumberForDebugMode();
  it('"generateRandomThresholdNumberForDebugMode" should return a number by the app configurations.', () => {
    let minSymbolsCount = symbolsValuesAsArrayOfNumber.length * 2;
    const maxSymbolsCount = (symbolsValuesAsArrayOfNumber.length * constants.settings.dataDuplication) - (4 * symbolsValuesAsArrayOfNumber.length);
    const chunkNumbers: number[] = [];
    while (minSymbolsCount <= maxSymbolsCount) {
      minSymbolsCount = minSymbolsCount + 10;
      chunkNumbers.push(((chunkNumbers[chunkNumbers.length - 1] || 0) + 10));
    }
    const randomThreshold = generateRandomThresholdNumberForDebugMode();
    expect(chunkNumbers).toContainEqual(randomThreshold);
  });
});
