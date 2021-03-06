import ReduxThunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from '../reducers';

const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };