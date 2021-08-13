import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    name: string;
    url: string;
    version: string;
  };
  settings: {
    dataDuplication: number;
  };
  text: {
    machineName: string;
    buttonAuto: string;
    buttonDebug: string;
    buttonSpin: string;
  };
}

const constants: IConstants = {
  app: {
    name: packageJSON.description,
    url: packageJSON.homepage,
    version: packageJSON.version,
  },
  settings: {
    dataDuplication: 30,
  },
  text: {
    machineName: 'JACKPOT',
    buttonDebug: 'Debug Mode',
    buttonAuto: 'Auto Mode',
    buttonSpin: 'SPIN',
  },
};

export type {
  IConstants,
};

export {
  constants,
};
