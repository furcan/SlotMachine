import { constants } from 'application/constants';
import { ESymbols } from 'application/enumerations/symbols';
import { generateRandomNumberBetween } from 'application/helpers';
import { IReduxSlotState } from 'application/redux';


const rdxSlotInitialState: IReduxSlotState = {
  stateDebugMode: {
    isActive: false,
  },
  stateSlotIsWelcome: false, // TODO: will be true after dev
  stateSlotCanBePlayed: true,
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: false,
  stateSlotData: Array(constants.settings.dataDuplication).fill([ESymbols.THREEXBAR, ESymbols.BAR, ESymbols.TWOXBAR, ESymbols.SEVEN, ESymbols.CHERRY]).flat(),
  stateSlotAchievements: {
    lineTopAchievements: '',
    lineCenterAchievements: '',
    lineBottomAchievements: '',
    reelLeftVisibleIndexes: {
      top: 0,
      center: 0,
      bottom: 0,
    },
    reelCenterVisibleIndexes: {
      top: 0,
      center: 0,
      bottom: 0,
    },
    reelRightVisibleIndexes: {
      top: 0,
      center: 0,
      bottom: 0,
    },
  },
  stateSlotLuckyLines: {
    // TODO: debug mode or random mode
    // TODO: random will be enum => 0 => top || random
    // TODO: random will be enum => 1 => center || random
    // TODO: random will be enum => 2 => bottom || random
    // left: generateRandomNumberBetween(0, 2),
    // center: generateRandomNumberBetween(0, 2),
    // right: generateRandomNumberBetween(0, 2),
    left: 1,
    center: 1,
    right: 1,
  },
  stateSlotLuckyNumbers: {
    // TODO: debug mode or random mode
    // TODO: random mode: will be 1x - 5x
    left: generateRandomNumberBetween(6, 94),
    center: generateRandomNumberBetween(6, 94),
    right: generateRandomNumberBetween(6, 94),
  },
};

export {
  rdxSlotInitialState,
};
