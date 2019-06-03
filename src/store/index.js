import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import userReducers from './user/reducers';

const reducers = combineReducers({
  user: userReducers,
});

export default createStore(
  reducers,
  applyMiddleware(thunk, logger)
);
