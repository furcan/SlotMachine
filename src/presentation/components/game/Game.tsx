import Machine from 'presentation/components/game/partials/machine/Machine';

import 'presentation/components/game/Game.scss';


function Game(): JSX.Element { // TODO: other components, game table, balance, etc...
  return (
    <div className="game">
      <Machine />
    </div>
  );
}

export default Game;
