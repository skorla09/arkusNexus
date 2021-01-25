import { combineReducers } from 'redux';
import home from '../screens/Home/reducer';
import details from '../screens/UserDetails/reducer'

const rootReducer = combineReducers({
  home,
  details
})

export default rootReducer