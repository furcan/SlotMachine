enum EReelsAlignments {
  LEFT = 1,
  CENTER = 2,
  RIGHT = 3,
}

const mapReelsAlignments = new Map<number, string>([
  [EReelsAlignments.LEFT, `left`],
  [EReelsAlignments.CENTER, `center`],
  [EReelsAlignments.RIGHT, `right`],
]);

const getReelsAlignmentsDescription = (enumeration: number): string => {
  return mapReelsAlignments.get(enumeration) || '';
};

export {
  EReelsAlignments,
  getReelsAlignmentsDescription,
};
