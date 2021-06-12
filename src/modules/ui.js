import { handleActions } from "redux-actions";
import { Map } from "immutable";

const FOCUS_INPUT = "ui/write/FOCUS_INPUT";
const BLUR_INPUT = "ui/write/BLUR_INPUT";
const CHANGE_INPUT = "ui/write/CHANGE_INPUT";
const RESET_INPUT = "ui/write/RESET_INPUT";

export const focusInput = () => ({ type: FOCUS_INPUT });
export const blurInput = () => ({ type: BLUR_INPUT });
export const changeInput = (payload) => ({ type: CHANGE_INPUT, payload });
export const resetInput = () => ({ type: RESET_INPUT });

const initialState = {
  write: {
    focused: false,
    title: "",
    body: "",
  },
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_INPUT:
      return {
        ...state,
        write: {
          ...state.write,
          focused: true,
        },
      };
    case BLUR_INPUT:
      return {
        ...state,
        write: {
          ...state.write,
          focused: false,
        },
      };
    case CHANGE_INPUT:
      const { name, value } = action.payload;
      return {
        ...state,
        write: {
          ...state.write,
          [name]: value,
        },
      };
    case RESET_INPUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default uiReducer;
