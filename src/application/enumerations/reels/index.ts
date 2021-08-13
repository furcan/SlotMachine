enum EReelsAlignments {
  LEFT = 0,
  CENTER = 1,
  RIGHT = 2,
}

const mapReelsAlignments = new Map<number, string>([
  [EReelsAlignments.LEFT, `left`],
  [EReelsAlignments.CENTER, `center`],
  [EReelsAlignments.RIGHT, `right`],
]);

const getReelsAlignmentsValue = (enumeration: number): string => {
  return mapReelsAlignments.get(enumeration) || '';
};

export {
  EReelsAlignments,
  getReelsAlignmentsValue,
};
