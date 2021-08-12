import { addSomeDelayAsync } from 'application/helpers';

import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotState,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
  IReduxSlotActionTypes,
  IReduxSlotActions,
} from 'application/redux';

const rdxSlotActionTypes: IReduxSlotActionTypes = {
  SLOT_RESTART: 'SLOT_RESTART',
  SLOT_ISSPINNING: 'SLOT_ISSPINNING',
  SLOT_SPINNINGHASENDED: 'SLOT_SPINNINGHASENDED',
  SLOT_LUCKYLINES: 'SLOT_LUCKYLINES',
  SLOT_LUCKYNUMBERS: 'SLOT_LUCKYNUMBERS',
  SLOT_ACHIEVEMENTS: 'SLOT_ACHIEVEMENTS',
};

const slotRestart = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_RESTART,
});

const slotIsSpinning = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ISSPINNING,
  actionIsSpinning: toggle,
});

const slotHasEnded = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_SPINNINGHASENDED,
  actionHasEnded: toggle,
});

const slotLuckyLines = (lines: IReduxSlotLuckyLines): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_LUCKYLINES,
  actionLuckyLines: lines,
});

const slotLuckyNumbers = (numbers: IReduxSlotLuckyNumbers): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_LUCKYNUMBERS,
  actionLuckyNumbers: numbers,
});

const slotAchievements = (achievements: IReduxSlotAchievements): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ACHIEVEMENTS,
  actionAchievements: achievements,
});


const rdxSlotRestartAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotRestart());
};

const rdxSlotIsSpinningAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotIsSpinning(true));
  await addSomeDelayAsync(1500);
  dispatch(slotIsSpinning(false));
};

const rdxSlotHasEndedAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotHasEnded(toggle));
};

const rdxSlotLuckyLinesAsync = (lines: IReduxSlotLuckyLines): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotLuckyLines(lines));
};

const rdxSlotLuckyNumbersAsync = (numbers: IReduxSlotLuckyNumbers): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotLuckyNumbers(numbers));
};

const rdxSlotAchievementsAsync = (achievements: IReduxSlotAchievements): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotAchievements(achievements));
};

const rdxSlotSelector = (state: IReduxSlotState): IReduxSlotState => state.slotReducer;

export {
  rdxSlotActionTypes,
  rdxSlotRestartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotLuckyLinesAsync,
  rdxSlotLuckyNumbersAsync,
  rdxSlotAchievementsAsync,
  rdxSlotSelector,
};
