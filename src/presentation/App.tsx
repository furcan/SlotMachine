import { useSelector } from 'react-redux';

import { rdxSlotSelector } from 'application/redux';

import Layout from 'presentation/components/layout/Layout';
import Welcome from 'presentation/components/welcome/Welcome';
import Game from 'presentation/components/game/Game';

function App(): JSX.Element {
  const { stateSlotIsWelcome } = useSelector(rdxSlotSelector);

  return (
    <Layout>
      {stateSlotIsWelcome && <Welcome />}
      {!stateSlotIsWelcome && <Game />}
    </Layout>
  );
}

export default App;
