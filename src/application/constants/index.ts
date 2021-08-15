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
      borderRadius: string;
      cssAnimationStyle: 'fade' | 'zoom' | 'from-right' | 'from-top' | 'from-bottom' | 'from-left';
      fontFamily: string;
      fontSize: string;
      timeout: number;
      success?: {
        background?: string,
        textColor?: string,
      };
      failure?: {
        background?: string,
        textColor?: string,
      };
      warning?: {
        background?: string,
        textColor?: string,
      };
      info?: {
        background?: string,
        textColor?: string,
      };
    };
  };
  text: {
    machineName: string;
    buttonDebug: string;
    buttonAuto: string;
    buttonSpin: string;
    buttonAddCoin: string;
    buttonWithdraw: string;
    debugMode: {
      title: string;
      description: string;
      positions: string;
      symbols: string;
      modalSavedAndClosed: string;
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
    tableBalance: {
      title: string;
      description: string;
      loading: string;
      noBalance: string;
      withdrawSuccess: string;
    };
    coins: {
      modalTitle: string;
      modalDescription: string;
      modalSavedAndClosed: string;
      modalCoinsCanNotBeAdded: string;
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
      borderRadius: '12px',
      cssAnimationStyle: 'from-top',
      fontFamily: 'Red Hat Display',
      fontSize: '14px',
      timeout: 4000,
      success: {
        background: '#00c478',
        textColor: '#fff',
      },
      info: {
        background: '#26c0d3',
        textColor: '#fff',
      },
    },
  },
  text: {
    machineName: 'JACKPOT',
    buttonDebug: 'Debug Mode',
    buttonAuto: 'Auto Mode',
    buttonSpin: 'SPIN',
    buttonAddCoin: 'Add Coin',
    buttonWithdraw: 'Withdraw',
    debugMode: {
      title: 'Debug Mode',
      description: 'You can select the types of symbols, and positions for each reel.',
      positions: 'Positions',
      symbols: 'Symbols',
      modalSavedAndClosed: 'Your settings have been saved.',
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
    tableBalance: {
      title: 'Balance',
      description: 'Your current balance is:',
      loading: 'Please wait...',
      noBalance: 'You have no coin to withdraw...',
      withdrawSuccess: 'We hope you have enjoyed it. Please come again.',
    },
    coins: {
      modalTitle: 'Add Coins',
      modalDescription: 'You can add coins between 1 and 5000. Your current balance is:',
      modalSavedAndClosed: 'Thanks. Now, you can play!',
      modalCoinsCanNotBeAdded: 'You have the coins that max allowed. You have to withdraw your current coins first to add new coins.',
      coinsRequired: 'Please add some coins to play.',
    },
  },
};

export type {
  IConstants,
};

export {
  constants,
};
