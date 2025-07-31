import { combineReducers } from "redux";
import { appReducer } from "./appRerducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
