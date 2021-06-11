import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

export default store;
