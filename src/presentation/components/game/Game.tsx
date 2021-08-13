import DebugMode from 'presentation/components/game/partials/debug-mode/DebugMode';
import Machine from 'presentation/components/game/partials/machine/Machine';

import 'presentation/components/game/Game.scss';

function Game(): JSX.Element { // TODO:
  return (
    <div className="game">
      <DebugMode />
      <Machine />
    </div>
  );
}

export default Game;
