import { createPromiseSaga, createPromiseSagaById, reducerUtils } from '../lib/asyncUtils'
import * as labelApi from 'lib/labelApi'
import { takeEvery } from 'redux-saga/effects'

//action type

const CREATE_LABEL = 'label/CREATE_LABEL'
const CREATE_LABEL_SUCCESS = 'label/CREATE_LABEL_SUCCESS'
const CREATE_LABEL_ERROR = 'label/CREATE_LABEL_ERROR'

const GET_INITIAL_LABEL = 'label/GET_INITIAL_LABEL'
const GET_INITIAL_LABEL_SUCCESS = 'label/GET_INITIAL_LABEL_SUCCESS'
const GET_INITIAL_LABEL_ERROR = 'label/GET_INITIAL_LABEL_ERROR'

export const createLabel = (payload) => ({ type: CREATE_LABEL, payload })
export const getInitialLabel = () => ({ type: GET_INITIAL_LABEL })

const createLabelSaga = createPromiseSaga(CREATE_LABEL, labelApi.createLabel)
const getInitialLabelSaga = createPromiseSaga(GET_INITIAL_LABEL, labelApi.getLabel)

// 사가들을 합치기
export function* labelSaga() {
  yield takeEvery(CREATE_LABEL, createLabelSaga)
  yield takeEvery(GET_INITIAL_LABEL, getInitialLabelSaga)
}

const initialState = reducerUtils.initial([])

const labelReducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case GET_INITIAL_LABEL:
      return {
        ...state,
        loading: true,
        data: state.data,
        error: null,
      }
    case GET_INITIAL_LABEL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      }
    case CREATE_LABEL_SUCCESS:
      return {
        ...state,
        data: [{ ...action.payload }, ...state.data],
      }
    default:
      return state
  }
}

export default labelReducer
