
import { generateRandomNumberBetween } from 'application/helpers';

import { IReduxSlotActions, IReduxSlotState, rdxSlotActionTypes } from 'application/redux';

const slotInitialState: IReduxSlotState = {
  stateSlotIsWelcome: true,
  stateSlotIsSpinning: false,
  stateSlotSpinningHasEnded: false,
  stateSlotData: Array(20).fill(['symbol1', 'symbol2', 'symbol3', 'symbol4', 'symbol5']).flat(), // TODO:
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
    // TODO: will be enum => 0 => top || random
    // TODO: will be enum => 1 => center || random
    // TODO: will be enum => 2 => bottom || random
    // left: generateRandomNumberBetween(0, 2),
    // center: generateRandomNumberBetween(0, 2),
    // right: generateRandomNumberBetween(0, 2),
    left: 1,
    center: 1,
    right: 1,
  },
  stateSlotLuckyNumbers: {
    left: generateRandomNumberBetween(6, 94),
    center: generateRandomNumberBetween(6, 94),
    right: generateRandomNumberBetween(6, 94),
  },
};

/* eslint-disable indent */
const slotReducer = (state = slotInitialState, action: IReduxSlotActions): IReduxSlotState => {
  switch (action.type) {
    case rdxSlotActionTypes.SLOT_RESTART:
      return slotInitialState;

    case rdxSlotActionTypes.SLOT_ISSPINNING:
      return {
        ...state,
        stateSlotIsSpinning: action.actionIsSpinning === true,
      };

    case rdxSlotActionTypes.SLOT_SPINNINGHASENDED:
      return {
        ...state,
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
