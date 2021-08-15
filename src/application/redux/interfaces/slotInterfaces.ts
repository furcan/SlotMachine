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
  SLOT_DEBUGMODEMODAL: string;
  SLOT_DEBUGMODELUCKYPOSITONS: string;
  SLOT_DEBUGMODELUCKYNUMBERS: string;
  SLOT_COINSMODAL: string;
  SLOT_COINSBALANCEINCREASE: string;
  SLOT_COINSBALANCEDECREASE: string;
  SLOT_CHECKOUT: string;
  SLOT_WELLCOME: string;
  SLOT_START: string;
  SLOT_SPINNINGANIMATION: string;
  SLOT_SPINNINGHASENDED: string;
  SLOT_ACHIEVEMENTS: string;
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
