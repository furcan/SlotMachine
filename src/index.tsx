import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from 'application/redux/reducers';

import App from 'presentation/App';

const SlotMachineApp = () => {
  const store = createStore(appReducers, composeWithDevTools(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

const slotMachineRootElement = window.document.getElementById('SlotMachineApp');
if (slotMachineRootElement?.hasChildNodes()) {
  hydrate(<SlotMachineApp />, slotMachineRootElement);
} else {
  render(<SlotMachineApp />, slotMachineRootElement);
}
