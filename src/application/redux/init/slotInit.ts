import { constants } from 'application/constants';
import { symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { IReduxSlotState } from 'application/redux';


const rdxSlotInitialState: IReduxSlotState = {
  stateDebugMode: {
    isActive: true, // TODO: will be false after dev
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
  stateSlotCanBePlayed: true,
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: false,
  stateSlotData: Array(constants.settings.dataDuplication).fill([...symbolsValuesAsArrayOfNumber]).flat(),
  stateSlotAchievements: {
    achievementsTop: [],
    achievementsCenter: [],
    achievementsBottom: [],
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
