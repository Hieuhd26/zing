import { applyMiddleware, createStore } from "redux";
import rootReducer from "./stores/reducers/rootReducer";
import { thunk } from "redux-thunk";

const reduxcConfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default reduxcConfig;
