import { rdxSlotInitialState, IReduxSlotActions, IReduxSlotState, rdxSlotActionTypes } from 'application/redux';

/* eslint-disable indent */
const slotReducer = (state = rdxSlotInitialState, action: IReduxSlotActions): IReduxSlotState => {
  switch (action.type) {
    case rdxSlotActionTypes.SLOT_GAME_WELCOME:
      return rdxSlotInitialState;

    case rdxSlotActionTypes.SLOT_GAME_START:
      return {
        ...rdxSlotInitialState,
        stateDebugMode: state.stateDebugMode,
        stateSlotIsWelcome: false,
      };

    case rdxSlotActionTypes.SLOT_GAME_SPINNINGANIMATION:
      return {
        ...state,
        stateSlotCanBePlayed: false,
        stateSlotIsSpinning: action.actionIsSpinning === true,
      };

    case rdxSlotActionTypes.SLOT_GAME_SPINNINGHASENDED:
      return {
        ...state,
        stateSlotSpinningHasEnded: action.actionHasEnded === true,
      };

    case rdxSlotActionTypes.SLOT_GAME_ACHIEVEMENTS:
      return {
        ...state,
        stateSlotAchievements: action.actionAchievements || rdxSlotInitialState.stateSlotAchievements,
      };

    case rdxSlotActionTypes.SLOT_DEBUGMODE:
      return {
        ...state,
        stateDebugMode: {
          ...state.stateDebugMode,
          isActive: action.actionIsDebugMode === true,
          isModalOpen: true,
        },
      };

    case rdxSlotActionTypes.SLOT_DEBUGMODE_MODAL:
      return {
        ...state,
        stateDebugMode: {
          ...state.stateDebugMode,
          isModalOpen: false,
        },
      };

    case rdxSlotActionTypes.SLOT_DEBUGMODE_LUCKYPOSITONS:
      return {
        ...state,
        stateDebugMode: {
          ...state.stateDebugMode,
          luckyPositions: action.actionDebugLuckyPositions || state.stateDebugMode.luckyPositions,
        },
      };

    case rdxSlotActionTypes.SLOT_DEBUGMODE_LUCKYNUMBERS:
      return {
        ...state,
        stateDebugMode: {
          ...state.stateDebugMode,
          luckyNumbers: action.actionDebugLuckyNumbers || state.stateDebugMode.luckyNumbers,
        },
      };

    case rdxSlotActionTypes.SLOT_COINS_MODAL:
      return {
        ...state,
        stateSlotCoinsModalIsOpen: action.actionIsCoinsModalOpen === true,
      };

    case rdxSlotActionTypes.SLOT_COINS_BALANCEINCREASE:
      return {
        ...state,
        stateSlotCoinsBalance: state.stateSlotCoinsBalance + (action.actionCoinsBalanceIncrase || 0),
        stateSlotCoinsModalIsOpen: false,
        stateSlotCanBePlayed: true,
      };

    case rdxSlotActionTypes.SLOT_COINS_BALANCEDECREASEONE:
      return {
        ...state,
        stateSlotCoinsBalance: (state.stateSlotCoinsBalance - 1) < 0 ? 0 : (state.stateSlotCoinsBalance - 1),
        stateSlotCanBePlayed: (state.stateSlotCoinsBalance - 1) > 0,
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  slotReducer,
};
