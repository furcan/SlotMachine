import { Dispatch } from 'redux';

import { EReelsPositions } from 'application/enumerations/reels';

type TReduxSlotData = string[]; // TODO: enum


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
  lineTopAchievements: string;
  lineCenterAchievements: string;
  lineBottomAchievements: string;
  reelLeftVisibleIndexes: IReduxSlotVisibleIndexes;
  reelCenterVisibleIndexes: IReduxSlotVisibleIndexes;
  reelRightVisibleIndexes: IReduxSlotVisibleIndexes;
}

interface IReduxSlotState {
  stateSlotIsWelcome: boolean;
  stateSlotIsSpinning: boolean;
  stateSlotSpinningHasEnded: boolean;
  stateSlotData: TReduxSlotData;
  stateSlotLuckyLines: IReduxSlotLuckyLines,
  stateSlotLuckyNumbers: IReduxSlotLuckyNumbers,
  stateSlotAchievements: IReduxSlotAchievements,
  slotReducer?: any;
}

interface IReduxSlotActionTypes {
  SLOT_WELLCOME: string;
  SLOT_START: string;
  SLOT_RESTART: string;
  SLOT_ISSPINNING: string;
  SLOT_SPINNINGHASENDED: string;
  SLOT_LUCKYLINES: string;
  SLOT_LUCKYNUMBERS: string;
  SLOT_ACHIEVEMENTS: string;
}

interface IReduxSlotActions {
  type: string;
  actionIsSpinning?: boolean;
  actionHasEnded?: boolean;
  actionLuckyLines?: IReduxSlotLuckyLines;
  actionLuckyNumbers?: IReduxSlotLuckyNumbers;
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
}
