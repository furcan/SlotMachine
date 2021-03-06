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
  rdxSlotStartGameAsync,
  rdxSlotSpinningAnimationAsync,
  rdxSlotSpinningHasEndedAsync,
  rdxSlotAchievementsAsync,
  rdxSlotDebugModeSwitchAsync,
  rdxSlotDebugModeCloseModalAsync,
  rdxSlotDebugModeLuckyPositionsAsync,
  rdxSlotDebugModeLuckyNumbersAsync,
  rdxSlotCoinsModalToggleAsync,
  rdxSlotCoinsBalanceIncreaseByAmountAsync,
  rdxSlotCoinsBalanceDecreaseOneCoinAsync,
  rdxSlotCoinsWithdrawAsync,
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
  rdxSlotStartGameAsync,
  rdxSlotSpinningAnimationAsync,
  rdxSlotSpinningHasEndedAsync,
  rdxSlotAchievementsAsync,
  rdxSlotDebugModeSwitchAsync,
  rdxSlotDebugModeCloseModalAsync,
  rdxSlotDebugModeLuckyPositionsAsync,
  rdxSlotDebugModeLuckyNumbersAsync,
  rdxSlotCoinsModalToggleAsync,
  rdxSlotCoinsBalanceIncreaseByAmountAsync,
  rdxSlotCoinsBalanceDecreaseOneCoinAsync,
  rdxSlotCoinsWithdrawAsync,
  rdxSlotSelector,
};
