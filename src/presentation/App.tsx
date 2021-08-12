import { useSelector } from 'react-redux';

import { rdxSlotSelector } from 'application/redux';

import Layout from 'presentation/components/layout/Layout';
import Welcome from 'presentation/components/welcome/Welcome';

function App(): JSX.Element {
  const { stateSlotIsWelcome } = useSelector(rdxSlotSelector);

  return (
    <Layout>
      {stateSlotIsWelcome && <Welcome />}
      {!stateSlotIsWelcome && <h1>Game</h1>}
    </Layout>
  );
}

export default App;
