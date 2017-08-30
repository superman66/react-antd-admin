import { combineReducers } from 'redux'
import login from './login'
import user from './users'

const app = combineReducers({
  login,
  user
})

export default app
