import { handleActions } from "redux-actions";
import * as webAPI from "lib/web-api";
import { createPromiseSaga } from "../lib/asyncUtils";
import { takeEvery } from "@redux-saga/core/effects";

// action type

const CREATE_MEMO = "memo/CREATE_MEMO";

const GET_INITIAL_MEMO = "memo/GET_INITIAL_MEMO";
const GET_INITIAL_MEMO_SUCCESS = "memo/GET_INITIAL_MEMO_SUCCESS";
const GET_INITIAL_MEMO_ERROR = "memo/GET_INITIAL_MEMO_ERROR";

const GET_RECENT_MEMO = "memo/GET_RECENT_MEMO";
const GET_RECENT_MEMO_SUCCESS = "memo/GET_RECENT_MEMO_SUCCESS";
const GET_RECENT_MEMO_ERROR = "memo/GET_RECENT_MEMO_ERROR";

// action function

export const createMemo = (payload) => ({ type: CREATE_MEMO, payload });
export const getInitialMemo = () => ({
  type: GET_INITIAL_MEMO,
});
export const getRecentMemo = (payload) => ({
  type: GET_RECENT_MEMO,
  payload,
});

const createMemoSaga = createPromiseSaga(CREATE_MEMO, webAPI.createMemo);
const getInitialMemoSaga = createPromiseSaga(
  GET_INITIAL_MEMO,
  webAPI.getInitialMemo
);
const getRecentMemoSaga = createPromiseSaga(
  GET_RECENT_MEMO,
  webAPI.getRecentMemo
);

// 사가들을 합치기
export function* memoSaga() {
  yield takeEvery(CREATE_MEMO, createMemoSaga);
  yield takeEvery(GET_INITIAL_MEMO, getInitialMemoSaga);
  yield takeEvery(GET_RECENT_MEMO, getRecentMemoSaga);
}

//initial state

const initialState = {
  list: [],
};

//memo reducer

const memoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_MEMO_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
      };
    case GET_RECENT_MEMO_SUCCESS:
      return {
        ...state,
        list: action.payload.data.concat(state.list),
      };

    default:
      return state;
  }
};

export default memoReducer;
