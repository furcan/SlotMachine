import Machine from 'presentation/components/game/partials/machine/Machine';
import Table from 'presentation/components/game/partials/table/Table';

import 'presentation/components/game/Game.scss';


function Game(): JSX.Element {
  return (
    <div className="game">
      <Machine />
      <Table />
    </div>
  );
}

export default Game;
