import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === "RESET") {
    storage.removeItem("persist:root");
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
