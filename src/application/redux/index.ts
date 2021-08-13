import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotState,
  IReduxSlotVisibleIndexes,
  TReduxSlotData,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
} from 'application/redux/interfaces/slotInterfaces';

import { rdxSlotInitialState } from 'application/redux/init/slotInit';

import {
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
} from 'application/redux/actions/slotActions';

export type {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotState,
  IReduxSlotVisibleIndexes,
  TReduxSlotData,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
};

export {
  rdxSlotInitialState,
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
