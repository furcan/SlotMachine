enum EReelsPositions {
  LEFT = 0,
  CENTER = 1,
  RIGHT = 2,
}

const mapReelsPositions = new Map<number, string>([
  [EReelsPositions.LEFT, `left`],
  [EReelsPositions.CENTER, `center`],
  [EReelsPositions.RIGHT, `right`],
]);

const getReelsPositionsValue = (enumeration: number): string => {
  return mapReelsPositions.get(enumeration) || '';
};

export {
  EReelsPositions,
  getReelsPositionsValue,
};
