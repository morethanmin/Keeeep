import { handleActions } from "redux-actions";
import * as webAPI from "lib/web-api";

// action type

const CREATE_MEMO = "memo/CREATE_MEMO";

// action function

export const createMemo = (payload) => ({ type: CREATE_MEMO, payload });

//initial state

const initialState = {};

//memo reducer

const memoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMO:
      return null;

    default:
      return state;
  }
};

export default memoReducer;
