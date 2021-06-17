import { handleActions } from "redux-actions";
import * as webAPI from "lib/web-api";
import {
  createPromiseSaga,
  createPromiseSagaById,
  reducerUtils,
} from "../lib/asyncUtils";
import { takeEvery, takeLatest, takeLeading } from "@redux-saga/core/effects";

// action type

const CREATE_MEMO = "memo/CREATE_MEMO";

const GET_INITIAL_MEMO = "memo/GET_INITIAL_MEMO";
const GET_INITIAL_MEMO_SUCCESS = "memo/GET_INITIAL_MEMO_SUCCESS";
const GET_INITIAL_MEMO_ERROR = "memo/GET_INITIAL_MEMO_ERROR";

const GET_RECENT_MEMO = "memo/GET_RECENT_MEMO";
const GET_RECENT_MEMO_SUCCESS = "memo/GET_RECENT_MEMO_SUCCESS";
const GET_RECENT_MEMO_ERROR = "memo/GET_RECENT_MEMO_ERROR";

const GET_PREVIOUS_MEMO = "memo/GET_PREVIOUS_MEMO";
const GET_PREVIOUS_MEMO_SUCCESS = "memo/GET_PREVIOUS_MEMO_SUCCESS";
const GET_PREVIOUS_MEMO_ERROR = "memo/GET_PREVIOUS_MEMO_ERROR";

const UPDATE_MEMO = "memo/UPDATE_MEMO";
const UPDATE_MEMO_SUCCESS = "memo/UPDATE_MEMO_SUCCESS";
const UPDATE_MEMO_ERROR = "memo/UPDATE_MEMO_ERROR";

const DELETE_MEMO = "memo/DELETE_MEMO";
const DELETE_MEMO_SUCCESS = "memo/DELETE_MEMO_SUCCESS";
const DELETE_MEMO_ERROR = "memo/DELETE_MEMO_ERROR";

// action function

export const createMemo = (payload) => ({ type: CREATE_MEMO, payload });
export const getInitialMemo = () => ({
  type: GET_INITIAL_MEMO,
});
export const getRecentMemo = (payload) => ({
  type: GET_RECENT_MEMO,
  payload,
});
export const getPreviousMemo = (payload) => ({
  type: GET_PREVIOUS_MEMO,
  payload,
});
export const updateMemo = (payload) => ({
  type: UPDATE_MEMO,
  payload,
});
export const deleteMemo = (id) => ({
  type: DELETE_MEMO,
  payload: id,
  meta: id,
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
const getPreviousMemoSaga = createPromiseSaga(
  GET_PREVIOUS_MEMO,
  webAPI.getPreviousMemo
);

const updateMemoSaga = createPromiseSaga(UPDATE_MEMO, webAPI.updateMemo);
const deleteMemoSaga = createPromiseSagaById(DELETE_MEMO, webAPI.deleteMemo);

// 사가들을 합치기
export function* memoSaga() {
  yield takeEvery(CREATE_MEMO, createMemoSaga);
  yield takeEvery(GET_INITIAL_MEMO, getInitialMemoSaga);
  yield takeEvery(GET_RECENT_MEMO, getRecentMemoSaga);
  yield takeLatest(GET_PREVIOUS_MEMO, getPreviousMemoSaga);
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
    case GET_PREVIOUS_MEMO_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
      };
    case UPDATE_MEMO_SUCCESS:
      const updatedData = state.data.concat().map((memo) =>
        memo.id === action.payload.data.id
          ? {
              ...memo,
              title: action.payload.data.title,
              body: action.payload.data.body,
            }
          : memo
      );
      return {
        ...state,
        data: updatedData,
      };
    case DELETE_MEMO_SUCCESS:
      const deletedData = state.data
        .concat()
        .filter((memo) => memo.id !== action.meta);
      return {
        ...state,
        data: deletedData,
      };
    default:
      return state;
  }
};

export default memoReducer;
