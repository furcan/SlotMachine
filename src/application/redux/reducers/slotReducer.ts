import { rdxSlotInitialState, IReduxSlotActions, IReduxSlotState, rdxSlotActionTypes } from 'application/redux';

/* eslint-disable indent */
const slotReducer = (state = rdxSlotInitialState, action: IReduxSlotActions): IReduxSlotState => {
  switch (action.type) {
    case rdxSlotActionTypes.SLOT_WELLCOME:
      return rdxSlotInitialState;

    case rdxSlotActionTypes.SLOT_START:
      return {
        ...rdxSlotInitialState,
        stateDebugMode: state.stateDebugMode,
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

    case rdxSlotActionTypes.SLOT_ACHIEVEMENTS:
      return {
        ...state,
        stateSlotAchievements: action.actionAchievements || rdxSlotInitialState.stateSlotAchievements,
      };

    case rdxSlotActionTypes.SLOT_ISDEBUGMODE:
      return {
        ...state,
        stateDebugMode: {
          ...state.stateDebugMode,
          isActive: action.actionIsDebugMode === true,
        },
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  slotReducer,
};
