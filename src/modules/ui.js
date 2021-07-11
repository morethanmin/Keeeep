import { MdLabelOutline } from 'react-icons/md'
import { AiOutlineBulb } from 'react-icons/ai'
import { BiArchiveIn } from 'react-icons/bi'
import { HiOutlinePencil } from 'react-icons/hi'
import { FaRegTrashAlt } from 'react-icons/fa'

const FOCUS_INPUT = 'ui/write/FOCUS_INPUT'
const BLUR_INPUT = 'ui/write/BLUR_INPUT'
const CHANGE_INPUT = 'ui/write/CHANGE_INPUT'
const RESET_INPUT = 'ui/write/RESET_INPUT'

const OPEN_MEMO = 'ui/memo/OPEN_MEMO'
const CLOSE_MEMO = 'ui/memo/CLOSE_MEMO'
const CHANGE_MEMO_INPUT = 'ui/memo/CHANGE_MEMO_INPUT'

const OPEN_LABEL = 'ui/label/OPEN_LABEL'
const CLOSE_LABEL = 'ui/label/CLOSE_LABEL'
const CHANGE_LABEL_INPUT = 'ui/label/CHANGE_LABEL_INPUT'
const RESET_LABEL_INPUT = 'ui/write/RESET_LABEL_INPUT'

const TOGGLE_MENU = 'ui/layout/TOGGLE_MENU'

export const focusInput = () => ({ type: FOCUS_INPUT })
export const blurInput = () => ({ type: BLUR_INPUT })
export const changeInput = (payload) => ({ type: CHANGE_INPUT, payload })
export const resetInput = () => ({ type: RESET_INPUT })

export const openMemo = (payload) => ({ type: OPEN_MEMO, payload })
export const closeMemo = () => ({ type: CLOSE_MEMO })
export const changeMemoInput = (payload) => ({
  type: CHANGE_MEMO_INPUT,
  payload,
})

export const openLabel = () => ({ type: OPEN_LABEL })
export const closeLabel = () => ({ type: CLOSE_LABEL })
export const changeLabelInput = (payload) => ({
  type: CHANGE_LABEL_INPUT,
  payload,
})
export const resetLabelInput = () => ({ type: RESET_LABEL_INPUT })

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
})

const initialState = {
  write: {
    focused: false,
    info: {
      title: '',
      body: '',
      label: [],
      pinned: false,
      archived: false,
      color: '#FFFFFF',
    },
  },
  memo: {
    open: false,
    info: {
      id: null,
      title: null,
      body: null,
      label: [],
      pinned: false,
      archived: false,
      color: '#FFFFFF',
    },
  },
  label: {
    open: false,
    input: '',
  },
  layout: {
    sidebar: {
      open: false,
      info: [
        {
          id: 0,
          name: '메모',
          ico: <AiOutlineBulb />,
          data: '/',
        },
        {
          id: 1,
          name: '라벨이름',
          ico: <MdLabelOutline />,
          data: '/label',
        },
        {
          id: 2,
          name: '라벨 수정',
          ico: <HiOutlinePencil />,
          type: 'dispatch',
          data: openLabel,
        },
        {
          id: 3,
          name: '보관처리',
          ico: <BiArchiveIn />,
          data: '/archive',
        },
        {
          id: 4,
          name: '휴지통',
          ico: <FaRegTrashAlt />,
          data: '/trash',
        },
      ],
    },
  },
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_INPUT:
      return {
        ...state,
        write: {
          ...state.write,
          focused: true,
        },
      }
    case BLUR_INPUT:
      return {
        ...state,
        write: {
          ...state.write,
          focused: false,
        },
      }
    case CHANGE_INPUT:
      const writeInput = action.payload
      return {
        ...state,
        write: {
          ...state.write,
          info: {
            ...state.write.info,

            [writeInput.name]: writeInput.value,
          },
        },
      }
    case RESET_INPUT:
      return {
        ...initialState,
      }

    case OPEN_MEMO:
      const memoInfo = action.payload
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
      }
    case CLOSE_MEMO:
      return {
        ...state,
        memo: {
          ...state.memo,
          open: false,
          info: {
            ...state.memo.info,
          },
        },
      }
    case CHANGE_MEMO_INPUT:
      const memoInput = action.payload
      return {
        ...state,
        memo: {
          ...state.memo,
          info: {
            ...state.memo.info,
            [memoInput.name]: memoInput.value,
          },
        },
      }

    case OPEN_LABEL:
      return {
        ...state,
        label: {
          ...state.label,
          open: true,
        },
      }
    case CLOSE_LABEL:
      return {
        ...state,
        label: {
          ...state.label,
          open: false,
        },
      }

    case CHANGE_LABEL_INPUT: {
      const labelInput = action.payload
      return {
        ...state,
        label: {
          ...state.label,
          [labelInput.name]: labelInput.value,
        },
      }
    }
    case RESET_LABEL_INPUT: {
      return {
        ...state,
        label: {
          ...state.label,
          input: '',
        },
      }
    }

    case TOGGLE_MENU:
      return {
        ...state,
        layout: {
          ...state.layout,
          sidebar: {
            ...state.layout.sidebar,
            open: !state.layout.sidebar.open,
          },
        },
      }

    default:
      return state
  }
}

export default uiReducer
