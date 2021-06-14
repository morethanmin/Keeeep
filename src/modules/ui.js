import { handleActions } from "redux-actions";
import { Map } from "immutable";

const FOCUS_INPUT = "ui/write/FOCUS_INPUT";
const BLUR_INPUT = "ui/write/BLUR_INPUT";
const CHANGE_INPUT = "ui/write/CHANGE_INPUT";
const RESET_INPUT = "ui/write/RESET_INPUT";

const OPEN_VIEWER = "ui/memo/OPEN_VIEWER";
const CLOSE_VIEWER = "ui/memo/CLOSE_VIEWER";
const CHANGE_VIEWER_INPUT = "ui/memo/CHANGE_VIEWER_INPUT";

export const focusInput = () => ({ type: FOCUS_INPUT });
export const blurInput = () => ({ type: BLUR_INPUT });
export const changeInput = (payload) => ({ type: CHANGE_INPUT, payload });
export const resetInput = () => ({ type: RESET_INPUT });

export const openViewer = (payload) => ({ type: OPEN_VIEWER, payload });
export const closeViewer = () => ({ type: CLOSE_VIEWER });
export const changeViewerInput = (payload) => ({
  type: CHANGE_VIEWER_INPUT,
  payload,
});

const initialState = {
  write: {
    focused: false,
    title: "",
    body: "",
  },
  memo: {
    open: false,
    info: {
      id: null,
      title: null,
      body: null,
    },
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
      const writeInput = action.payload;
      return {
        ...state,
        write: {
          ...state.write,
          [writeInput.name]: writeInput.value,
        },
      };
    case RESET_INPUT:
      return {
        ...initialState,
      };

    case OPEN_VIEWER:
      const memoInfo = action.payload;
      return {
        ...state,
        memo: {
          ...state.memo,
          open: true,
          info: {
            ...state.memo.info,
            ...memoInfo,
          },
        },
      };
    case CLOSE_VIEWER:
      return {
        ...state,
        memo: {
          ...state.memo,
          open: false,
          info: {
            ...state.memo.info,
          },
        },
      };
    case CHANGE_VIEWER_INPUT:
      const memoInput = action.payload;
      return {
        ...state,
        memo: {
          ...state.memo,
          info: {
            ...state.memo.info,
            [memoInput.name]: memoInput.value,
          },
        },
      };

    default:
      return state;
  }
};

export default uiReducer;
