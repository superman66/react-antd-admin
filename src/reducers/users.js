
import * as types from '../constants/ActionTypes';


const initialState = {
  data: [],
  page: {}
};

export default function login(state = initialState, action) {

  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        ...{
          data: action.items || [],
          page: action.page || {}
        }
      }
    default:
      return state;
  }
}
