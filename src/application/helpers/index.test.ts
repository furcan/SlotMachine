import { constants } from 'application/constants';
import { ESymbols, ESymbolsPositions, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { EAchievements } from 'application/enumerations/achievements';
import {
  generateRandomNumberBetween,
  generateRandomThresholdNumberForDebugMode,
  calcTheAchievementsForThePayment,
  combineTheAchievementsByTheCurrentBalance,
} from 'application/helpers';


describe('Helper functions should be work as expected.', () => {

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

  describe('calcTheAchievementsForThePayment()', () => {

    it('3 CHERRY symbols on top line => 2000', () => {
      const threeCherryOnTopLine = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnTopLine).toBe(EAchievements.THREE_CHERRY_ONTOP);
    });

    it('3 CHERRY symbols on center line => 1000', () => {
      const threeCherryOnCenterLine = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnCenterLine).toBe(EAchievements.THREE_CHERRY_ONCENTER);
    });

    it('3 CHERRY symbols on bottom line => 4000', () => {
      const threeCherryOnBottomLine = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]);
      expect(threeCherryOnBottomLine).toBe(EAchievements.THREE_CHERRY_ONBOTTOM);
    });

    it('3 7 symbols on any line => 150', () => {
      const threeSevenOnTopLine = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnTopLine).toBe(EAchievements.THREE_SEVEN_ONANY);

      const threeSevenOnCenterLine = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnCenterLine).toBe(EAchievements.THREE_SEVEN_ONANY);

      const threeSevenOnBottomLine = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]);
      expect(threeSevenOnBottomLine).toBe(EAchievements.THREE_SEVEN_ONANY);
    });

    it('3 3xBAR symbols on any line => 50', () => {
      const threeThreeXBarOnTopLine = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnTopLine).toBe(EAchievements.THREE_3xBAR_ONANY);

      const threeThreeXBarOnCenterLine = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnCenterLine).toBe(EAchievements.THREE_3xBAR_ONANY);

      const threeThreeXBarOnBottomLine = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.THREEXBAR, ESymbols.THREEXBAR, ESymbols.THREEXBAR]);
      expect(threeThreeXBarOnBottomLine).toBe(EAchievements.THREE_3xBAR_ONANY);
    });

    it('3 2xBAR symbols on any line => 20', () => {
      const threeTwoXBarOnTopLine = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnTopLine).toBe(EAchievements.THREE_2xBAR_ONANY);

      const threeTwoXBarOnCenterLine = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnCenterLine).toBe(EAchievements.THREE_2xBAR_ONANY);

      const threeTwoXBarOnBottomLine = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.TWOXBAR, ESymbols.TWOXBAR, ESymbols.TWOXBAR]);
      expect(threeTwoXBarOnBottomLine).toBe(EAchievements.THREE_2xBAR_ONANY);
    });

    it('3 BAR symbols on any line => 10', () => {
      const threeBarOnTopLine = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnTopLine).toBe(EAchievements.THREE_BAR_ONANY);

      const threeBarOnCenterLine = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnCenterLine).toBe(EAchievements.THREE_BAR_ONANY);

      const threeBarOnBottomLine = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]);
      expect(threeBarOnBottomLine).toBe(EAchievements.THREE_BAR_ONANY);
    });

    it('Any combination of CHERRY and 7 on any line => 75', () => {
      const cherryCherrySeven = [ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.SEVEN];
      const cherrySevenCherry = [ESymbols.CHERRY, ESymbols.SEVEN, ESymbols.CHERRY];
      const cherrySevenSeven = [ESymbols.CHERRY, ESymbols.SEVEN, ESymbols.SEVEN];
      const sevenSevenCherry = [ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.CHERRY];
      const sevenCherrySeven = [ESymbols.SEVEN, ESymbols.CHERRY, ESymbols.SEVEN];
      const sevenCherryCherry = [ESymbols.SEVEN, ESymbols.CHERRY, ESymbols.CHERRY];

      const scenario1Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, cherryCherrySeven);
      expect(scenario1Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario2Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, cherrySevenCherry);
      expect(scenario2Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario3Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, cherrySevenSeven);
      expect(scenario3Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario4Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, sevenSevenCherry);
      expect(scenario4Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario5Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, sevenCherrySeven);
      expect(scenario5Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario6Top = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, sevenCherryCherry);
      expect(scenario6Top).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario1Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, cherryCherrySeven);
      expect(scenario1Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario2Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, cherrySevenCherry);
      expect(scenario2Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario3Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, cherrySevenSeven);
      expect(scenario3Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario4Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, sevenSevenCherry);
      expect(scenario4Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario5Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, sevenCherrySeven);
      expect(scenario5Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario6Center = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, sevenCherryCherry);
      expect(scenario6Center).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario1Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, cherryCherrySeven);
      expect(scenario1Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario2Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, cherrySevenCherry);
      expect(scenario2Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario3Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, cherrySevenSeven);
      expect(scenario3Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario4Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, sevenSevenCherry);
      expect(scenario4Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario5Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, sevenCherrySeven);
      expect(scenario5Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

      const scenario6Bottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, sevenCherryCherry);
      expect(scenario6Bottom).toBe(EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
    });

    it('Combination of any BAR symbols on any line => 5', () => {
      const anyAllBarsOnTop = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.BAR, ESymbols.TWOXBAR, ESymbols.THREEXBAR]);
      expect(anyAllBarsOnTop).toBe(EAchievements.COMBINATION_ALLBARS_ONANY);

      const anyAllBarsOnCenter = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.BAR, ESymbols.TWOXBAR, ESymbols.THREEXBAR]);
      expect(anyAllBarsOnCenter).toBe(EAchievements.COMBINATION_ALLBARS_ONANY);

      const anyAllBarsOnBottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.BAR, ESymbols.TWOXBAR, ESymbols.THREEXBAR]);
      expect(anyAllBarsOnBottom).toBe(EAchievements.COMBINATION_ALLBARS_ONANY);
    });

    it('Game Over', () => {
      const gameOverOnTop = calcTheAchievementsForThePayment(ESymbolsPositions.TOP, [ESymbols.THREEXBAR, ESymbols.TWOXBAR, ESymbols.THREEXBAR]);
      expect(gameOverOnTop).toBe(EAchievements.GAME_OVER);

      const gameOverOnCenter = calcTheAchievementsForThePayment(ESymbolsPositions.CENTER, [ESymbols.BAR, ESymbols.SEVEN, ESymbols.BAR]);
      expect(gameOverOnCenter).toBe(EAchievements.GAME_OVER);

      const gameOverOnBottom = calcTheAchievementsForThePayment(ESymbolsPositions.BOTTOM, [ESymbols.TWOXBAR, ESymbols.CHERRY, ESymbols.TWOXBAR]);
      expect(gameOverOnBottom).toBe(EAchievements.GAME_OVER);
    });
  });

  describe('combineTheAchievementsByTheCurrentBalance()', () => {
    it('"combineTheAchievementsByTheCurrentBalance()" function should return the total payment by each achievement times current balance.', () => {
      const currentBalance1 = 1881;
      const achievements1 = [EAchievements.THREE_CHERRY_ONTOP, EAchievements.THREE_3xBAR_ONANY, EAchievements.THREE_BAR_ONANY];
      const calculate1 = combineTheAchievementsByTheCurrentBalance(achievements1, currentBalance1);
      expect(calculate1).toBe(
        (currentBalance1 * EAchievements.THREE_CHERRY_ONTOP) +
        (currentBalance1 * EAchievements.THREE_3xBAR_ONANY) +
        (currentBalance1 * EAchievements.THREE_BAR_ONANY),
      );

      const currentBalance2 = 1923;
      const achievements2 = [EAchievements.THREE_2xBAR_ONANY, EAchievements.THREE_SEVEN_ONANY, EAchievements.THREE_CHERRY_ONBOTTOM];
      const calculate2 = combineTheAchievementsByTheCurrentBalance(achievements2, currentBalance2);
      expect(calculate2).toBe(
        (currentBalance2 * EAchievements.THREE_2xBAR_ONANY) +
        (currentBalance2 * EAchievements.THREE_SEVEN_ONANY) +
        (currentBalance2 * EAchievements.THREE_CHERRY_ONBOTTOM),
      );

      const currentBalance3 = 5000;
      const achievements3 = [EAchievements.THREE_BAR_ONANY, EAchievements.THREE_2xBAR_ONANY, EAchievements.THREE_SEVEN_ONANY];
      const calculate3 = combineTheAchievementsByTheCurrentBalance(achievements3, currentBalance3);
      expect(calculate3).toBe(
        (currentBalance3 * EAchievements.THREE_BAR_ONANY) +
        (currentBalance3 * EAchievements.THREE_2xBAR_ONANY) +
        (currentBalance3 * EAchievements.THREE_SEVEN_ONANY),
      );
    });
  });
});
