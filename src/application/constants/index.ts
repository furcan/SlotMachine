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
    showSucceededIndicatior: boolean;
    maxCoinsCount: number;
    notifyOptions: {
      cssAnimationStyle: 'fade' | 'zoom' | 'from-right' | 'from-top' | 'from-bottom' | 'from-left';
      fontFamily: string;
      fontSize: string;
    },
  };
  text: {
    machineName: string;
    buttonDebug: string;
    buttonAuto: string;
    buttonSpin: string;
    buttonAddCoin: string;
    debugMode: {
      title: string;
      description: string;
      positions: string;
      symbols: string;
    };
    tablePay: {
      title: string;
      description: string;
      loading: string;
      gameOver: string;
      lineTop: string;
      lineCenter: string;
      lineBottom: string;
      lineAny: string;
    };
    coins: {
      modalTitle: string;
      modalDescription: string;
      coinsRequired: string;
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
    dataDuplication: 18, // Symbol's counts multiplied by this
    animationDurationAsMS: 2000,
    animationDurationStepAsMs: 500,
    showSucceededIndicatior: true,
    maxCoinsCount: 5000,
    notifyOptions: {
      cssAnimationStyle: 'from-top',
      fontFamily: 'Red Hat Display',
      fontSize: '14px',
    },
  },
  text: {
    machineName: 'JACKPOT',
    buttonDebug: 'Debug Mode',
    buttonAuto: 'Auto Mode',
    buttonSpin: 'SPIN',
    buttonAddCoin: 'Add Coin',
    debugMode: {
      title: 'Debug Mode',
      description: 'You can select the types of symbols, and positions for each reel.',
      positions: 'Positions',
      symbols: 'Symbols',
    },
    tablePay: {
      title: 'Pay Table',
      description: 'The winning combinations and payouts.',
      loading: 'Please wait...',
      gameOver: 'You have lost...',
      lineTop: 'Top Line',
      lineCenter: 'Center Line',
      lineBottom: 'Bottom Line',
      lineAny: 'Any Line',
    },
    coins: {
      modalTitle: 'Add Coins',
      modalDescription: 'You can add coins between 1 and 5000. Your current balance is:',
      coinsRequired: 'Please add some Coins to play.',
    },
  },
};

export type {
  IConstants,
};

export {
  constants,
};
