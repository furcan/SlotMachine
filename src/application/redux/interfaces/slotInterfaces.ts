import { Dispatch } from 'redux';

import { ESymbols } from 'application/enumerations/symbols';


type TReduxSlotData = ESymbols[];

interface IReduxSlotVisibleIndexes {
  top: number;
  center: number;
  bottom: number;
}

interface IReduxSlotLuckyLines {
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
  lineTopAchievements: ESymbols[];
  lineCenterAchievements: ESymbols[];
  lineBottomAchievements: ESymbols[];
  reelLeftVisibleIndexes: IReduxSlotVisibleIndexes;
  reelCenterVisibleIndexes: IReduxSlotVisibleIndexes;
  reelRightVisibleIndexes: IReduxSlotVisibleIndexes;
}

interface IReduxSlotDebugMode {
  isActive: boolean;
  luckyLines: IReduxSlotLuckyLines;
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
  SLOT_ISDEBUGMODE: string;
  SLOT_DEBUGMODELUCKYLINES: string;
  SLOT_DEBUGMODELUCKYNUMBERS: string;
  SLOT_WELLCOME: string;
  SLOT_START: string;
  SLOT_ISSPINNING: string;
  SLOT_SPINNINGHASENDED: string;
  SLOT_ACHIEVEMENTS: string;
}

interface IReduxSlotActions {
  type: string;
  actionIsDebugMode?: boolean;
  actionDebugLuckyLines?: IReduxSlotLuckyLines;
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
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
  IReduxSlotState,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotDispatch,
  Dispatch,
};
