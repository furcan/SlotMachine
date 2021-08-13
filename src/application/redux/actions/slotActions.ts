import { constants } from 'application/constants';
import { addSomeDelayAsync } from 'application/helpers';

import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotState,
  IReduxSlotAchievements,
  IReduxSlotActionTypes,
  IReduxSlotActions,
} from 'application/redux';

const rdxSlotActionTypes: IReduxSlotActionTypes = {
  SLOT_ISDEBUGMODE: 'SLOT_ISDEBUGMODE',
  SLOT_WELLCOME: 'SLOT_START',
  SLOT_START: 'SLOT_START',
  SLOT_ISSPINNING: 'SLOT_ISSPINNING',
  SLOT_SPINNINGHASENDED: 'SLOT_SPINNINGHASENDED',
  SLOT_ACHIEVEMENTS: 'SLOT_ACHIEVEMENTS',
};


const slotWelcome = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_WELLCOME,
});

const slotStart = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_START,
});

const slotIsSpinning = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ISSPINNING,
  actionIsSpinning: toggle,
});

const slotHasEnded = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_SPINNINGHASENDED,
  actionHasEnded: toggle,
});

const slotAchievements = (achievements: IReduxSlotAchievements): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ACHIEVEMENTS,
  actionAchievements: achievements,
});

const slotSwitchToDebugMode = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ISDEBUGMODE,
  actionIsDebugMode: toggle,
});


const rdxSlotWelcomeAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotWelcome());
};

const rdxSlotStartAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotStart());
};

const rdxSlotIsSpinningAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotIsSpinning(true));
  await addSomeDelayAsync(constants.settings.animationDurationAsMS - (2 * constants.settings.animationDurationStepAsMs));
  dispatch(slotIsSpinning(false));
};

const rdxSlotHasEndedAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotHasEnded(toggle));
};

const rdxSlotAchievementsAsync = (achievements: IReduxSlotAchievements): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotAchievements(achievements));
};

const rdxSlotSwitchToDebugModeAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotSwitchToDebugMode(toggle));
};

const rdxSlotSelector = (state: IReduxSlotState): IReduxSlotState => state.slotReducer;

export {
  rdxSlotActionTypes,
  rdxSlotWelcomeAsync,
  rdxSlotStartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotAchievementsAsync,
  rdxSlotSwitchToDebugModeAsync,
  rdxSlotSelector,
};
