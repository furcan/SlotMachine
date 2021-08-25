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
  SLOT_DEBUGMODE_MODAL: 'SLOT_DEBUGMODE_MODAL',
  SLOT_DEBUGMODE_LUCKYPOSITIONS: 'SLOT_DEBUGMODE_LUCKYPOSITIONS',
  SLOT_DEBUGMODE_LUCKYNUMBERS: 'SLOT_DEBUGMODE_LUCKYNUMBERS',
  SLOT_COINS_MODAL: 'SLOT_COINS_MODAL',
  SLOT_COINS_BALANCEINCREASE: 'SLOT_COINS_BALANCEINCREASE',
  SLOT_COINS_BALANCEDECREASEONE: 'SLOT_COINS_BALANCEDECREASEONE',
  SLOT_GAME_WELCOME: 'SLOT_GAME_WELCOME',
  SLOT_GAME_START: 'SLOT_GAME_START',
  SLOT_GAME_SPINNINGANIMATION: 'SLOT_GAME_SPINNINGANIMATION',
  SLOT_GAME_SPINNINGHASENDED: 'SLOT_GAME_SPINNINGHASENDED',
  SLOT_GAME_ACHIEVEMENTS: 'SLOT_GAME_ACHIEVEMENTS',
};


const slotWelcome = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_GAME_WELCOME,
});

const slotStartGame = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_GAME_START,
});

const slotSpinningAnimation = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_GAME_SPINNINGANIMATION,
  actionIsSpinning: toggle,
});

const slotSpinningHasEnded = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_GAME_SPINNINGHASENDED,
  actionHasEnded: toggle,
});

const slotAchievements = (achievements: IReduxSlotAchievements): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_GAME_ACHIEVEMENTS,
  actionAchievements: achievements,
});

const slotDebugModeSwitch = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODE,
  actionIsDebugMode: toggle,
});

const slotDebugModeCloseModal = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODE_MODAL,
});

const slotDebugModeLuckyPositions = (positions: IReduxSlotLuckyPositions): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODE_LUCKYPOSITIONS,
  actionDebugLuckyPositions: positions,
});

const slotDebugModeLuckyNumbers = (numbers: IReduxSlotLuckyNumbers): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_DEBUGMODE_LUCKYNUMBERS,
  actionDebugLuckyNumbers: numbers,
});

const slotCoinsModalToggle = (toggle: boolean): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINS_MODAL,
  actionIsCoinsModalOpen: toggle,
});

const slotCoinsBalanceIncraseByAmount = (balance: number): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINS_BALANCEINCREASE,
  actionCoinsBalanceIncrase: balance,
});

const slotCoinsBalanceDecreaseOneCoin = (): IReduxSlotActions => ({
  type: rdxSlotActionTypes.SLOT_COINS_BALANCEDECREASEONE,
});


const rdxSlotWelcomeAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotWelcome());
};

const rdxSlotStartGameAsync = (): IReduxSlotDispatch => async (dispatch: Dispatch<IReduxSlotActions>) => {
  dispatch(slotStartGame());
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
  dispatch(slotStartGame());
};

const rdxSlotSelector = (state: IReduxSlotState): IReduxSlotState => state.slotReducer;

export {
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
