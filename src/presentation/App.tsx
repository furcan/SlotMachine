import { useSelector } from 'react-redux';

import { rdxSlotSelector } from 'application/redux';

import Layout from 'presentation/components/layout/Layout';

function App(): JSX.Element {
  const { stateSlotIsWelcome } = useSelector(rdxSlotSelector);

  return (
    <Layout>
      {stateSlotIsWelcome && <h1>Welcome</h1>}
      {!stateSlotIsWelcome &&  <h1>Game</h1>}
    </Layout>
  );
}

export default App;
