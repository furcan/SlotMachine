import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotState,
  IReduxSlotVisibleIndexes,
  TReduxSlotData,
  IReduxSlotLuckyPositions,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
} from 'application/redux/interfaces/slotInterfaces';

import { rdxSlotInitialState } from 'application/redux/init/slotInit';

import {
  rdxSlotActionTypes,
  rdxSlotWelcomeAsync,
  rdxSlotStartAsync,
  rdxSlotSpinningAnimationAsync,
  rdxSlotSpinningHasEndedAsync,
  rdxSlotAchievementsAsync,
  rdxSlotDebugModeSwitchAsync,
  rdxSlotDebugModeCloseModalAsync,
  rdxSlotDebugModeLuckyPositionsAsync,
  rdxSlotDebugModeLuckyNumbersAsync,
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
  IReduxSlotLuckyPositions,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
};

export {
  rdxSlotInitialState,
  rdxSlotActionTypes,
  rdxSlotWelcomeAsync,
  rdxSlotStartAsync,
  rdxSlotSpinningAnimationAsync,
  rdxSlotSpinningHasEndedAsync,
  rdxSlotAchievementsAsync,
  rdxSlotDebugModeSwitchAsync,
  rdxSlotDebugModeCloseModalAsync,
  rdxSlotDebugModeLuckyPositionsAsync,
  rdxSlotDebugModeLuckyNumbersAsync,
  rdxSlotSelector,
};
