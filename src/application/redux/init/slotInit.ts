import { constants } from 'application/constants';
import { ESymbols } from 'application/enumerations/symbols';
import { IReduxSlotState } from 'application/redux';


const rdxSlotInitialState: IReduxSlotState = {
  stateDebugMode: {
    isActive: false,
    luckyLines: {
      left: 0,
      center: 0,
      right: 0,
    },
    luckyNumbers: {
      left: 0,
      center: 0,
      right: 0,
    },
  },
  stateSlotIsWelcome: false, // TODO: will be true after dev
  stateSlotCanBePlayed: true,
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: false,
  stateSlotData: Array((Object.keys(ESymbols).length / 2) * constants.settings.dataDuplication).fill([ESymbols.THREEXBAR, ESymbols.BAR, ESymbols.TWOXBAR, ESymbols.SEVEN, ESymbols.CHERRY]).flat(),
  stateSlotAchievements: {
    lineTopAchievements: [],
    lineCenterAchievements: [],
    lineBottomAchievements: [],
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
};

export {
  rdxSlotInitialState,
};
