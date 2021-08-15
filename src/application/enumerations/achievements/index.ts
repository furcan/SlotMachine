import {
  AiOutlineVerticalAlignTop as IconTop,
  AiOutlineVerticalAlignMiddle as IconCenter,
  AiOutlineVerticalAlignBottom as IconBottom,
} from 'react-icons/ai';
import { GrMenu as IconAny } from 'react-icons/gr';
import { HiOutlineEmojiSad as IconGameOver } from 'react-icons/hi';

import { ESymbols, getSymbolsImagesAsSrc } from 'application/enumerations/symbols';


enum EAchievements {
  GAME_OVER = 0,
  THREE_CHERRY_ONTOP = 2000,
  THREE_CHERRY_ONCENTER = 1000,
  THREE_CHERRY_ONBOTTOM = 4000,
  THREE_SEVEN_ONANY = 150,
  THREE_3xBAR_ONANY = 50,
  THREE_2xBAR_ONANY = 20,
  THREE_BAR_ONANY = 10,
  COMBINATION_CHERRYANDSEVEN_ONANY = 75,
  COMBINATION_ALLBARS_ONANY = 5,
}

const achievementsKeysAsArrayOfString = Object.keys(EAchievements).splice(Math.floor(Object.keys(EAchievements).length / 2));
const achievementsValuesAsArrayOfNumber = Object.keys(EAchievements).splice(0, Math.floor(Object.keys(EAchievements).length / 2)).map(x => +x);

const mapAchievementsPositionsAsFC = new Map<number, React.FC>([
  [EAchievements.GAME_OVER, IconGameOver],
  [EAchievements.THREE_CHERRY_ONTOP, IconTop],
  [EAchievements.THREE_CHERRY_ONCENTER, IconCenter],
  [EAchievements.THREE_CHERRY_ONBOTTOM, IconBottom],
  [EAchievements.THREE_SEVEN_ONANY, IconAny],
  [EAchievements.THREE_3xBAR_ONANY, IconAny],
  [EAchievements.THREE_2xBAR_ONANY, IconAny],
  [EAchievements.THREE_BAR_ONANY, IconAny],
  [EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY, IconAny],
  [EAchievements.COMBINATION_ALLBARS_ONANY, IconAny],
]);

const getAchievementPositionAsFC = (enumeration: number): React.FC => {
  return mapAchievementsPositionsAsFC.get(enumeration) || IconAny;
};


const mapAchievementsSymbolsImagesAsSrc = new Map<number, string[]>([
  [EAchievements.GAME_OVER, []],
  [EAchievements.THREE_CHERRY_ONTOP, [
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
  ]],
  [EAchievements.THREE_CHERRY_ONCENTER, [
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
  ]],
  [EAchievements.THREE_CHERRY_ONBOTTOM, [
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
  ]],
  [EAchievements.THREE_SEVEN_ONANY, [
    getSymbolsImagesAsSrc(ESymbols.SEVEN),
    getSymbolsImagesAsSrc(ESymbols.SEVEN),
    getSymbolsImagesAsSrc(ESymbols.SEVEN),
  ]],
  [EAchievements.THREE_3xBAR_ONANY, [
    getSymbolsImagesAsSrc(ESymbols.THREEXBAR),
    getSymbolsImagesAsSrc(ESymbols.THREEXBAR),
    getSymbolsImagesAsSrc(ESymbols.THREEXBAR),
  ]],
  [EAchievements.THREE_2xBAR_ONANY, [
    getSymbolsImagesAsSrc(ESymbols.TWOXBAR),
    getSymbolsImagesAsSrc(ESymbols.TWOXBAR),
    getSymbolsImagesAsSrc(ESymbols.TWOXBAR),
  ]],
  [EAchievements.THREE_BAR_ONANY, [
    getSymbolsImagesAsSrc(ESymbols.BAR),
    getSymbolsImagesAsSrc(ESymbols.BAR),
    getSymbolsImagesAsSrc(ESymbols.BAR),
  ]],
  [EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY, [ // 4 symbols for UI, bcs of the combinations
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.SEVEN),
    getSymbolsImagesAsSrc(ESymbols.CHERRY),
    getSymbolsImagesAsSrc(ESymbols.SEVEN),
  ]],
  [EAchievements.COMBINATION_ALLBARS_ONANY, [
    getSymbolsImagesAsSrc(ESymbols.BAR),
    getSymbolsImagesAsSrc(ESymbols.TWOXBAR),
    getSymbolsImagesAsSrc(ESymbols.THREEXBAR),
  ]],
]);

const getAchievementSymbolsImagesAsSrc = (enumeration: number): string[] => {
  return mapAchievementsSymbolsImagesAsSrc.get(enumeration) || [];
};


export {
  EAchievements,
  achievementsKeysAsArrayOfString,
  achievementsValuesAsArrayOfNumber,
  getAchievementPositionAsFC,
  getAchievementSymbolsImagesAsSrc,
};
