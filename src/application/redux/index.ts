import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotState,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
} from 'application/redux/interfaces/slotInterfaces';

import {
  rdxSlotActionTypes,
  rdxSlotWelcomeAsync,
  rdxSlotStartAsync,
  rdxSlotRestartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotLuckyLinesAsync,
  rdxSlotLuckyNumbersAsync,
  rdxSlotAchievementsAsync,
  rdxSlotSelector,
} from 'application/redux/actions/slotActions';

export type {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotState,
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
};

export {
  rdxSlotActionTypes,
  rdxSlotWelcomeAsync,
  rdxSlotStartAsync,
  rdxSlotRestartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotLuckyLinesAsync,
  rdxSlotLuckyNumbersAsync,
  rdxSlotAchievementsAsync,
  rdxSlotSelector,
};
