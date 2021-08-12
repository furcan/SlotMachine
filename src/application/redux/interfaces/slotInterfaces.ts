import { Dispatch } from 'redux';


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
  reelLeftVisibleIndexes: {
    top: number;
    center: number;
    bottom: number;
  };
  reelCenterVisibleIndexes: {
    top: number;
    center: number;
    bottom: number;
  };
  reelRightVisibleIndexes: {
    top: number;
    center: number;
    bottom: number;
  };
}

interface IReduxSlotState {
  stateSlotIsWelcome: boolean;
  stateSlotIsSpinning: boolean;
  stateSlotSpinningHasEnded: boolean;
  stateSlotData: string[];
  stateSlotLuckyLines: IReduxSlotLuckyLines,
  stateSlotLuckyNumbers: IReduxSlotLuckyNumbers,
  stateSlotAchievements: IReduxSlotAchievements,
  slotReducer?: any;
}

interface IReduxSlotActionTypes {
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
  IReduxSlotLuckyLines,
  IReduxSlotLuckyNumbers,
  IReduxSlotAchievements,
  IReduxSlotState,
  IReduxSlotActionTypes,
  IReduxSlotActions,
  IReduxSlotDispatch,
  Dispatch,
}
