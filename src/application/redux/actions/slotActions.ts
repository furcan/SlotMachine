import { constants } from 'application/constants';
import { addSomeDelayAsync } from 'application/helpers';

import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotState,
  IReduxSlotAchievements,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
} from 'application/redux';

const rdxSlotActionTypes: IReduxSlotActionTypes = {
  SLOT_ISDEBUGMODE: 'SLOT_ISDEBUGMODE',
  SLOT_DEBUGMODELUCKYLINES: 'SLOT_DEBUGMODELUCKYLINES',
  SLOT_DEBUGMODELUCKYNUMBERS: 'SLOT_DEBUGMODELUCKYNUMBERS',
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

const slotLuckyLinesForDebugMode = (lines: IReduxSlotLuckyLines): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODELUCKYLINES,
  actionDebugLuckyLines: lines,
});

const slotLuckyNumbersForDebugMode = (numbers: IReduxSlotLuckyNumbers): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODELUCKYNUMBERS,
  actionDebugLuckyNumbers: numbers,
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

const rdxSlotLuckyLinesForDebugModeAsync = (lines: IReduxSlotLuckyLines): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotLuckyLinesForDebugMode(lines));
};

const rdxSlotLuckyNumbersForDebugModeAsync = (numbers: IReduxSlotLuckyNumbers): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotLuckyNumbersForDebugMode(numbers));
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
  rdxSlotLuckyLinesForDebugModeAsync,
  rdxSlotLuckyNumbersForDebugModeAsync,
  rdxSlotSelector,
};
