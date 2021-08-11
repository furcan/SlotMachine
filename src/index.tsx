import React from 'react';
import { hydrate, render } from 'react-dom';

import App from 'presentation/App';

const SlotMachineApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const slotMachineRootElement = window.document.getElementById('SlotMachineApp');
if (slotMachineRootElement?.hasChildNodes()) {
  hydrate(<SlotMachineApp />, slotMachineRootElement);
} else {
  render(<SlotMachineApp />, slotMachineRootElement);
}
