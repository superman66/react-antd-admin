
import * as types from '../constants/ActionTypes';


const initialState = {
  data: []
};

export default function login(state = initialState, action) {

  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        ...{
          status: action.status,
          data: action.items || [],
          page: action.page || {}
        }
      }
    default:
      return state;
  }
}
