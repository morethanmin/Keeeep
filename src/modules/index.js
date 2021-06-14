import { combineReducers } from "redux";
import memo, { memoSaga } from "./memo";
import ui from "./ui";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  memo,
  ui,
});

export function* rootSaga() {
  yield all([memoSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
export default rootReducer;
