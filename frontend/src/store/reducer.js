import dashboardReducer from 'store/dashboardReducer'
import totalReducer from 'store/totalReducer'
import { combineReducers } from 'redux'
//data should keep in localstorage
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  total: totalReducer,

})

export default rootReducer
