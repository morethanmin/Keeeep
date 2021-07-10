import { createPromiseSaga, createPromiseSagaById, reducerUtils } from '../lib/asyncUtils'

export function* labelSaga() {}

const initialState = reducerUtils.initial([])

const labelReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    default:
      return state
  }
}

export default labelReducer
