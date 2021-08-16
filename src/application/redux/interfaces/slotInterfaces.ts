import { Dispatch } from 'redux';

import { ESymbols } from 'application/enumerations/symbols';
import { EAchievements } from 'application/enumerations/achievements';


type TReduxSlotData = ESymbols[];

interface IReduxSlotVisibleIndexes {
  top: number;
  center: number;
  bottom: number;
}

interface IReduxSlotLuckyPositions {
  left: number;
  center: number;
  right: number;
}

interface IReduxSlotLuckyNumbers {
  left: number;
  center: number;
  right: number;
}

interface IReduxSlotAchievements {
  isGameOver: boolean;
  achievementTop: EAchievements;
  achievementCenter: EAchievements;
  achievementBottom: EAchievements;
  symbolsTop: ESymbols[];
  symbolsCenter: ESymbols[];
  symbolsBottom: ESymbols[];
  visibleIndexesLeft: IReduxSlotVisibleIndexes;
  visibleIndexesCenter: IReduxSlotVisibleIndexes;
  visibleIndexesRight: IReduxSlotVisibleIndexes;
}

interface IReduxSlotDebugMode {
  isActive: boolean;
  isModalOpen: boolean;
  luckyPositions: IReduxSlotLuckyPositions;
  luckyNumbers: IReduxSlotLuckyNumbers;
}

interface IReduxSlotState {
  stateDebugMode: IReduxSlotDebugMode;
  stateSlotCoinsModalIsOpen: boolean;
  stateSlotCoinsBalance: number;
  stateSlotIsWelcome: boolean;
  stateSlotCanBePlayed: boolean;
  stateSlotIsSpinning: boolean;
  stateSlotSpinningHasEnded: boolean;
  stateSlotData: TReduxSlotData;
  stateSlotAchievements: IReduxSlotAchievements,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slotReducer?: any;
}

interface IReduxSlotActionTypes {
  SLOT_DEBUGMODE: string;
  SLOT_DEBUGMODE_MODAL: string;
  SLOT_DEBUGMODE_LUCKYPOSITONS: string;
  SLOT_DEBUGMODE_LUCKYNUMBERS: string;
  SLOT_COINS_MODAL: string;
  SLOT_COINS_BALANCEINCREASE: string;
  SLOT_COINS_BALANCEDECREASEONE: string;
  SLOT_GAME_WELCOME: string;
  SLOT_GAME_START: string;
  SLOT_GAME_SPINNINGANIMATION: string;
  SLOT_GAME_SPINNINGHASENDED: string;
  SLOT_GAME_ACHIEVEMENTS: string;
}

interface IReduxSlotActions {
  type: string;
  actionIsDebugMode?: boolean;
  actionDebugLuckyPositions?: IReduxSlotLuckyPositions;
  actionDebugLuckyNumbers?: IReduxSlotLuckyNumbers;
  actionIsSpinning?: boolean;
  actionHasEnded?: boolean;
  actionAchievements?: IReduxSlotAchievements;
  actionCoinsBalanceIncrase?: number;
  actionIsCoinsModalOpen?: boolean;
}

interface IReduxSlotDispatch {
  (dispatch: Dispatch<IReduxSlotActions>): Promise<void>;
}

export type {
  IReduxSlotVisibleIndexes,
  TReduxSlotData,
  IReduxSlotLuckyPositions,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
  IReduxSlotState,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotDispatch,
  Dispatch,
};
