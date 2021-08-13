import { Dispatch } from 'redux';

import { ESymbols } from 'application/enumerations/symbols';


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
  achievementsTop: ESymbols[];
  achievementsCenter: ESymbols[];
  achievementsBottom: ESymbols[];
  visibleIndexesLeft: IReduxSlotVisibleIndexes;
  visibleIndexesCenter: IReduxSlotVisibleIndexes;
  visibleIndexesRight: IReduxSlotVisibleIndexes;
}

interface IReduxSlotDebugMode {
  isActive: boolean;
  isOpen: boolean;
  luckyPositions: IReduxSlotLuckyPositions;
  luckyNumbers: IReduxSlotLuckyNumbers;
}

interface IReduxSlotState {
  stateDebugMode: IReduxSlotDebugMode;
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
