import { constants } from 'application/constants';
import { addSomeDelayAsync } from 'application/helpers';

import {
  Dispatch,
  IReduxSlotDispatch,
  IReduxSlotState,
  IReduxSlotAchievements,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotLuckyPositions,
  IReduxSlotLuckyNumbers,
} from 'application/redux';

const rdxSlotActionTypes: IReduxSlotActionTypes = {
  SLOT_DEBUGMODE: 'SLOT_DEBUGMODE',
  SLOT_DEBUGMODEMODAL: 'SLOT_DEBUGMODEMODAL',
  SLOT_DEBUGMODELUCKYPOSITONS: 'SLOT_DEBUGMODELUCKYPOSITONS',
  SLOT_DEBUGMODELUCKYNUMBERS: 'SLOT_DEBUGMODELUCKYNUMBERS',
  SLOT_COINSMODAL: 'SLOT_COINSMODAL',
  SLOT_COINSBALANCEINCREASE: 'SLOT_COINSBALANCEINCREASE',
  SLOT_COINSBALANCEDECREASEONE: 'SLOT_COINSBALANCEDECREASEONE',
  SLOT_WELLCOME: 'SLOT_START',
  SLOT_START: 'SLOT_START',
  SLOT_SPINNINGANIMATION: 'SLOT_SPINNINGANIMATION',
  SLOT_SPINNINGHASENDED: 'SLOT_SPINNINGHASENDED',
  SLOT_ACHIEVEMENTS: 'SLOT_ACHIEVEMENTS',
};


const slotWelcome = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_WELLCOME,
});

const slotStart = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_START,
});

const slotSpinningAnimation = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_SPINNINGANIMATION,
  actionIsSpinning: toggle,
});

const slotSpinningHasEnded = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_SPINNINGHASENDED,
  actionHasEnded: toggle,
});

const slotAchievements = (achievements: IReduxSlotAchievements): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_ACHIEVEMENTS,
  actionAchievements: achievements,
});

const slotDebugModeSwitch = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODE,
  actionIsDebugMode: toggle,
});

const slotDebugModeCloseModal = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODEMODAL,
});

const slotDebugModeLuckyPositions = (positions: IReduxSlotLuckyPositions): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODELUCKYPOSITONS,
  actionDebugLuckyPositions: positions,
});

const slotDebugModeLuckyNumbers = (numbers: IReduxSlotLuckyNumbers): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODELUCKYNUMBERS,
  actionDebugLuckyNumbers: numbers,
});

const slotCoinsModalToggle = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSMODAL,
  actionIsCoinsModalOpen: toggle,
});

const slotCoinsBalanceIncraseByAmount = (balance: number): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSBALANCEINCREASE,
  actionCoinsBalanceIncrase: balance,
});

const slotCoinsBalanceDecreaseOneCoin = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSBALANCEDECREASEONE,
});


const rdxSlotWelcomeAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotWelcome());
};

const rdxSlotStartAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotStart());
};

const rdxSlotSpinningAnimationAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotSpinningAnimation(true));
  await addSomeDelayAsync(constants.settings.animationDurationAsMS - (2 * constants.settings.animationDurationStepAsMs));
  dispatch(slotSpinningAnimation(false));
};

const rdxSlotSpinningHasEndedAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotSpinningHasEnded(toggle));
};

const rdxSlotAchievementsAsync = (achievements: IReduxSlotAchievements): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotAchievements(achievements));
};

const rdxSlotDebugModeSwitchAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotDebugModeSwitch(toggle));
};

const rdxSlotDebugModeCloseModalAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotDebugModeCloseModal());
};

const rdxSlotDebugModeLuckyPositionsAsync = (positions: IReduxSlotLuckyPositions): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotDebugModeLuckyPositions(positions));
};

const rdxSlotDebugModeLuckyNumbersAsync = (numbers: IReduxSlotLuckyNumbers): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotDebugModeLuckyNumbers(numbers));
};

const rdxSlotCoinsModalToggleAsync = (toggle: boolean): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsModalToggle(toggle));
};

const rdxSlotCoinsBalanceIncreaseByAmountAsync = (balance: number): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsBalanceIncraseByAmount(balance));
};

const rdxSlotCoinsBalanceDecreaseOneCoinAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsBalanceDecreaseOneCoin());
};

const rdxSlotCoinsWithdrawAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotStart());
};

const rdxSlotSelector = (state: IReduxSlotState): IReduxSlotState => state.slotReducer;

export {
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
  rdxSlotCoinsModalToggleAsync,
  rdxSlotCoinsBalanceIncreaseByAmountAsync,
  rdxSlotCoinsBalanceDecreaseOneCoinAsync,
  rdxSlotCoinsWithdrawAsync,
  rdxSlotSelector,
};
