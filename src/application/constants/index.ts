import * as packageJSON from '../../../package.json';


interface IConstants {
  app: {
    name: string;
    url: string;
    version: string;
  };
  settings: {
    dataDuplication: 14 | 16 | 18 | 20;
    animationDurationAsMS: number;
    animationDurationStepAsMs: number;
  };
  text: {
    machineName: string;
    buttonAuto: string;
    buttonDebug: string;
    buttonSpin: string;
    debugMode: {
      title: string;
      description: string;
      positions: string;
      symbols: string;
    };
  };
}

const constants: IConstants = {
  app: {
    name: packageJSON.description,
    url: packageJSON.homepage,
    version: packageJSON.version,
  },
  settings: {
    dataDuplication: 16, // Symbol's counts multiplied by this
    animationDurationAsMS: 2000,
    animationDurationStepAsMs: 500,
  },
  text: {
    machineName: 'JACKPOT',
    buttonDebug: 'Debug Mode',
    buttonAuto: 'Auto Mode',
    buttonSpin: 'SPIN',
    debugMode: {
      title: 'Debug Mode',
      description: 'You can select the types of symbols, and positions for each reel.',
      positions: 'Positions',
      symbols: 'Symbols',
    },
  },
};

export type {
  IConstants,
};

export {
  constants,
};
