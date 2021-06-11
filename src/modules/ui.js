import { handleActions } from "redux-actions";
import { Map } from "immutable";

const FOCUS_INPUT = "ui/write/FOCUS_INPUT";
const BLUR_INPUT = "ui/write/BLUR_INPUT";
const CHANGE_INPUT = "ui/write/CHANGE_INPUT";
const RESET_INPUT = "ui/write/RESET_INPUT";

export const focusInput = () => ({ type: FOCUS_INPUT });
export const blurInput = () => ({ type: BLUR_INPUT });
export const changeInput = () => ({ type: CHANGE_INPUT });
export const resetInput = () => ({ type: RESET_INPUT });

const initialState = {
  write: {
    focused: false,
    title: "",
    body: "",
  },
};

const uiReducer = (state, action) => {};

export default handleActions({}, initialState);
