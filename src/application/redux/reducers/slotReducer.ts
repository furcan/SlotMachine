
import { generateRandomNumberBetween } from 'application/helpers';

import { IReduxSlotActions, IReduxSlotState, rdxSlotActionTypes } from 'application/redux';

const slotInitialState: IReduxSlotState = {
  stateSlotIsWelcome: false, // TODO: will be true after dev
  stateSlotCanBePlayed: true,
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: false,
  stateSlotData: Array(20).fill(['symbol1', 'symbol2', 'symbol3', 'symbol4', 'symbol5']).flat(), // TODO: will be enum && 20 => constants
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

/* eslint-disable indent */
const slotReducer = (state = slotInitialState, action: IReduxSlotActions): IReduxSlotState => {
  switch (action.type) {
    case rdxSlotActionTypes.SLOT_WELLCOME:
      return slotInitialState;

    case rdxSlotActionTypes.SLOT_START:
      return {
        ...slotInitialState,
        stateSlotIsWelcome: false,
      };

    case rdxSlotActionTypes.SLOT_RESTART:
      return {
        ...slotInitialState,
        stateSlotIsWelcome: false,
      };

    case rdxSlotActionTypes.SLOT_ISSPINNING:
      return {
        ...state,
        stateSlotCanBePlayed: false,
        stateSlotIsSpinning: action.actionIsSpinning === true,
      };

    case rdxSlotActionTypes.SLOT_SPINNINGHASENDED:
      return {
        ...state,
        stateSlotCanBePlayed: true,
        stateSlotSpinningHasEnded: action.actionHasEnded === true,
      };

    case rdxSlotActionTypes.SLOT_LUCKYLINES:
      return {
        ...state,
        stateSlotLuckyLines: action.actionLuckyLines || slotInitialState.stateSlotLuckyLines,
      };

    case rdxSlotActionTypes.SLOT_LUCKYNUMBERS:
      return {
        ...state,
        stateSlotLuckyNumbers: action.actionLuckyNumbers || slotInitialState.stateSlotLuckyNumbers,
      };

    case rdxSlotActionTypes.SLOT_ACHIEVEMENTS:
      return {
        ...state,
        stateSlotAchievements: action.actionAchievements || slotInitialState.stateSlotAchievements,
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  slotInitialState,
  slotReducer,
};
