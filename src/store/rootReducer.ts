import { combineReducers, Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { globalReducer } from './global';

const appReducer = combineReducers({ globalReducer });

const rootReducer: Reducer = (state, action) => {
  let newState = state;
  if (action.type === 'RESET') {
    storage.removeItem('persist:root');
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
