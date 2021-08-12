import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    name: string;
    url: string;
  };
  settings: {
    dataDuplication: number;
  };
  text: {
    machineName: string;
  };
}

const constants: IConstants = {
  app: {
    name: packageJSON.description,
    url: packageJSON.homepage,
  },
  settings: {
    dataDuplication: 30,
  },
  text: {
    machineName: 'JACKPOT',
  },
};

export type {
  IConstants,
};

export {
  constants,
};
