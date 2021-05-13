import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { createLogicMiddleware } from "redux-logic";
import logger from "redux-logger";
import { rootReducer } from "./reducer";
import { AllLogics } from "./logic";
import { routerMiddleware, push } from 'react-router-redux'
import  {createBrowserHistory}  from 'history'

export const configureStore = () => {
  console.log("hii");
  const history = createBrowserHistory();
  const logicMiddleware = createLogicMiddleware(AllLogics);
  const historyMiddleware = routerMiddleware(history);
  const middlewares = [logicMiddleware,historyMiddleware];
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    console.log("logger");
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};
