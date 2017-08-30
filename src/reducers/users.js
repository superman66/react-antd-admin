
import * as types from '../constants/ActionTypes'
import createReducer from '../utils/createReducer'
import createRequestHandler from '../utils/createRequestHandler'

const initialState = {
  data: [],
  page: {}
}


export default createReducer(initialState, {
  [types.FETCH_USERS]: createRequestHandler((state, action) => {
    return {
      data: action.items || [],
      page: action.page || {}
    }
  })
})
