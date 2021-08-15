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
  SLOT_COINSBALANCEDECREASE: 'SLOT_COINSBALANCEDECREASE',
  SLOT_CHECKOUT: 'SLOT_CHECKOUT',
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

const slotCoinsModalOpen = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSMODAL,
});

const slotCoinsBalanceIncrase = (balance: number): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSBALANCEINCREASE,
  actionCoinsBalanceIncrase: balance,
});

const slotCoinsBalanceDecrease = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINSBALANCEDECREASE,
});

const slotCheckout = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_CHECKOUT,
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

const rdxSlotCoinsModalOpenAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsModalOpen());
};

const rdxSlotCoinsBalanceIncreaseAsync = (balance: number): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsBalanceIncrase(balance));
};

const rdxSlotCoinsBalanceDecreaseAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCoinsBalanceDecrease());
};

const rdxSlotCheckoutAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotCheckout());
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
  rdxSlotCoinsModalOpenAsync,
  rdxSlotCoinsBalanceIncreaseAsync,
  rdxSlotCoinsBalanceDecreaseAsync,
  rdxSlotCheckoutAsync,
  rdxSlotSelector,
};
