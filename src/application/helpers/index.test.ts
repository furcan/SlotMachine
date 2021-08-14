import { constants } from 'application/constants';
import { ESymbols, ESymbolsPositions, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { EAchievements } from 'application/enumerations/achievements';
import {
  generateRandomNumberBetween,
  generateRandomThresholdNumberForDebugMode,
  calcTheAchievementsAndPayIt,
} from 'application/helpers';


describe('Helper functions should be work as epected.', () => {

  describe('generateRandomNumberBetween()', () => {
    it('"generateRandomNumberBetween" function should return a number between the arguments:', () => {
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

      const example5 = generateRandomNumberBetween(1923, 1923);
      expect(example5).toBe(1923);
    });
  });

  describe('generateRandomThresholdNumberForDebugMode()', () => {
    it('"generateRandomThresholdNumberForDebugMode()" function should return a number by the app configurations.', () => {
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

  describe('calcTheAchievementsAndPayIt()', () => {

    it('3 CHERRY symbols on top line => 2000', () => {
      const threeCherryOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnTopLine).toBe(EAchievements.THREE_CHERRY_ONTOP);
    });

    it('3 CHERRY symbols on center line => 1000', () => {
      const threeCherryOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnCenterLine).toBe(EAchievements.THREE_CHERRY_ONCENTER);
    });

    it('3 CHERRY symbols on bottom line => 4000', () => {
      const threeCherryOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnBottomLine).toBe(EAchievements.THREE_CHERRY_ONBOTTOM);
    });

    it('3 7 symbols on any line => 150', () => {
      const threeSevenOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnTopLine).toBe(EAchievements.THREE_SEVEN_ONANY);

      const threeSevenOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnCenterLine).toBe(EAchievements.THREE_SEVEN_ONANY);

      const threeSevenOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnBottomLine).toBe(EAchievements.THREE_SEVEN_ONANY);
    });

    it('3 3xBAR symbols on any line => 50', () => {
      const threeThreeXBarOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnTopLine).toBe(EAchievements.THREE_3xBAR_ONANY);

      const threeThreeXBarOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnCenterLine).toBe(EAchievements.THREE_3xBAR_ONANY);

      const threeThreeXBarOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnBottomLine).toBe(EAchievements.THREE_3xBAR_ONANY);
    });

    it('3 2xBAR symbols on any line => 20', () => {
      const threeTwoXBarOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnTopLine).toBe(EAchievements.THREE_2xBAR_ONANY);

      const threeTwoXBarOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnCenterLine).toBe(EAchievements.THREE_2xBAR_ONANY);

      const threeTwoXBarOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnBottomLine).toBe(EAchievements.THREE_2xBAR_ONANY);
    });

    it('3 BAR symbols on any line => 10', () => {
      const threeBarOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnTopLine).toBe(EAchievements.THREE_BAR_ONANY);

      const threeBarOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnCenterLine).toBe(EAchievements.THREE_BAR_ONANY);

      const threeBarOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnBottomLine).toBe(EAchievements.THREE_BAR_ONANY);
    });

    it('Any combination of CHERRY and 7 on any line => 75', () => {
      const anyCherryAndSevenOnTopLine = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [ESymbols.CHERRY, ESymbols.SEVEN, generateRandomNumberBetween(ESymbols.THREEXBAR, ESymbols.CHERRY)]);
      expect(anyCherryAndSevenOnTopLine).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const anyCherryAndSevenOnCenterLine = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [ESymbols.CHERRY, ESymbols.SEVEN, generateRandomNumberBetween(ESymbols.THREEXBAR, ESymbols.CHERRY)]);
      expect(anyCherryAndSevenOnCenterLine).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const anyCherryAndSevenOnBottomLine = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [ESymbols.CHERRY, ESymbols.SEVEN, generateRandomNumberBetween(ESymbols.THREEXBAR, ESymbols.CHERRY)]);
      expect(anyCherryAndSevenOnBottomLine).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
    });

    it('Combination of any BAR symbols on any line => 5', () => {
      const anyBarAchievements = [
        ESymbols.BAR,
        generateRandomNumberBetween(ESymbols.THREEXBAR, ESymbols.CHERRY),
        generateRandomNumberBetween(ESymbols.THREEXBAR, ESymbols.CHERRY),
      ];

      const isAchievementsIncludesAllBars = anyBarAchievements.every(x => x === ESymbols.BAR);
      const isAchievementsIncludesAnyCherryAndSeven = anyBarAchievements.includes(ESymbols.CHERRY) && anyBarAchievements.includes(ESymbols.SEVEN);

      const anyBarOnTop = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, anyBarAchievements);
      if (isAchievementsIncludesAnyCherryAndSeven) {
        expect(anyBarOnTop).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
      } else if (isAchievementsIncludesAllBars) {
        expect(anyBarOnTop).toBe(EAchievements.THREE_BAR_ONANY);
      } else {
        expect(anyBarOnTop).toBe(EAchievements.COMBINATION_BAR_ONANY);
      }

      const anyBarOnCenter = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, anyBarAchievements);
      if (isAchievementsIncludesAnyCherryAndSeven) {
        expect(anyBarOnCenter).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
      } else if (isAchievementsIncludesAllBars) {
        expect(anyBarOnCenter).toBe(EAchievements.THREE_BAR_ONANY);
      } else {
        expect(anyBarOnCenter).toBe(EAchievements.COMBINATION_BAR_ONANY);
      }

      const anyBarOnBottom = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, anyBarAchievements);
      if (isAchievementsIncludesAnyCherryAndSeven) {
        expect(anyBarOnBottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
      } else if (isAchievementsIncludesAllBars) {
        expect(anyBarOnBottom).toBe(EAchievements.THREE_BAR_ONANY);
      } else {
        expect(anyBarOnBottom).toBe(EAchievements.COMBINATION_BAR_ONANY);
      }
    });

    it('Game Over', () => {
      const gameOverOnTop = calcTheAchievementsAndPayIt(ESymbolsPositions.TOP, [0, 0, 0]);
      expect(gameOverOnTop).toBe(EAchievements.GAME_OVER);

      const gameOverOnCenter = calcTheAchievementsAndPayIt(ESymbolsPositions.CENTER, [0, 0, 0]);
      expect(gameOverOnCenter).toBe(EAchievements.GAME_OVER);

      const gameOverOnBottom = calcTheAchievementsAndPayIt(ESymbolsPositions.BOTTOM, [0, 0, 0]);
      expect(gameOverOnBottom).toBe(EAchievements.GAME_OVER);
    });

  });
});
