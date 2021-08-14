import { constants } from 'application/constants';
import { symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { IReduxSlotState } from 'application/redux';


const rdxSlotInitialState: IReduxSlotState = {
  stateDebugMode: {
    isActive: false,
    isOpen: false,
    luckyPositions: {
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
  stateSlotCanBePlayed: true, // TODO: will be related to the coins/balance
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: true,
  stateSlotData: Array(constants.settings.dataDuplication).fill([...symbolsValuesAsArrayOfNumber]).flat(),
  stateSlotAchievements: {
    isGameOver: false,
    achievementTop: 0,
    achievementCenter: 0,
    achievementBottom: 0,
    symbolsTop: [],
    symbolsCenter: [],
    symbolsBottom: [],
    visibleIndexesLeft: {
      top: 0,
      center: 0,
      bottom: 0,
    },
    visibleIndexesCenter: {
      top: 0,
      center: 0,
      bottom: 0,
    },
    visibleIndexesRight: {
      top: 0,
      center: 0,
      bottom: 0,
    },
  },
};

export {
  rdxSlotInitialState,
};
