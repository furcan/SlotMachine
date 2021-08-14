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

const mapAchievements = new Map<number, string>([
  [EAchievements.GAME_OVER, `TODO: 0`],
  [EAchievements.THREE_CHERRY_ONTOP, `TODO: 2000`],
  [EAchievements.THREE_CHERRY_ONCENTER, `TODO: 1000`],
  [EAchievements.THREE_CHERRY_ONBOTTOM, `TODO: 4000`],
  [EAchievements.THREE_SEVEN_ONANY, `TODO: 150`],
  [EAchievements.THREE_3xBAR_ONANY, `TODO: 50`],
  [EAchievements.THREE_2xBAR_ONANY, `TODO: 20`],
  [EAchievements.THREE_BAR_ONANY, `TODO: 10`],
  [EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY, `TODO: 75`],
  [EAchievements.COMBINATION_ALLBARS_ONANY, `TODO: 5`],
]);

const getAchievementsValue = (enumeration: number): string => {
  return mapAchievements.get(enumeration) || '';
};

export {
  EAchievements,
  achievementsKeysAsArrayOfString,
  achievementsValuesAsArrayOfNumber,
  getAchievementsValue,
};
