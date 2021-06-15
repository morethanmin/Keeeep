import { handleActions } from "redux-actions";
import * as webAPI from "lib/web-api";
import { createPromiseSaga, reducerUtils } from "../lib/asyncUtils";
import { takeEvery } from "@redux-saga/core/effects";

// action type

const CREATE_MEMO = "memo/CREATE_MEMO";

const GET_INITIAL_MEMO = "memo/GET_INITIAL_MEMO";
const GET_INITIAL_MEMO_SUCCESS = "memo/GET_INITIAL_MEMO_SUCCESS";
const GET_INITIAL_MEMO_ERROR = "memo/GET_INITIAL_MEMO_ERROR";

const GET_RECENT_MEMO = "memo/GET_RECENT_MEMO";
const GET_RECENT_MEMO_SUCCESS = "memo/GET_RECENT_MEMO_SUCCESS";
const GET_RECENT_MEMO_ERROR = "memo/GET_RECENT_MEMO_ERROR";

const UPDATE_MEMO = "memo/UPDATE_MEMO";
const UPDATE_MEMO_SUCCESS = "memo/UPDATE_MEMO";
const UPDATE_MEMO_ERROR = "memo/UPDATE_MEMO";

const DELETE_MEMO = "memo/DELETE_MEMO";
const DELETE_MEMO_SUCCESS = "memo/DELETE_MEMO";
const DELETE_MEMO_ERROR = "memo/DELETE_MEMO";

// action function

export const createMemo = (payload) => ({ type: CREATE_MEMO, payload });
export const getInitialMemo = () => ({
  type: GET_INITIAL_MEMO,
});
export const getRecentMemo = (payload) => ({
  type: GET_RECENT_MEMO,
  payload,
});
export const updateMemo = (payload) => ({
  type: UPDATE_MEMO,
  payload,
});
export const deleteMemo = (payload) => ({
  type: DELETE_MEMO,
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

const updateMemoSaga = createPromiseSaga(UPDATE_MEMO, webAPI.updateMemo);
const deleteMemoSaga = createPromiseSaga(DELETE_MEMO, webAPI.deleteMemo);

// 사가들을 합치기
export function* memoSaga() {
  yield takeEvery(CREATE_MEMO, createMemoSaga);
  yield takeEvery(GET_INITIAL_MEMO, getInitialMemoSaga);
  yield takeEvery(GET_RECENT_MEMO, getRecentMemoSaga);
  yield takeEvery(UPDATE_MEMO, updateMemoSaga);
  yield takeEvery(DELETE_MEMO, deleteMemoSaga);
}

//initial state

const initialState = {
  ...reducerUtils.initial([]),
};

//memo reducer

const memoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_INITIAL_MEMO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case GET_RECENT_MEMO_SUCCESS:
      return {
        ...state,
        data: action.payload.data.concat(state.data),
      };

    case UPDATE_MEMO_SUCCESS:
      return {
        ...state,
      };
    case DELETE_MEMO_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default memoReducer;
