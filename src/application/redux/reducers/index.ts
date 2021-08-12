import { combineReducers } from 'redux';

import { slotReducer } from 'application/redux/reducers/slotReducer';

const appReducers = combineReducers({
  slotReducer,
});

export { appReducers };
