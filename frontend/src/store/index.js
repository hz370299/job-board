import { createStore } from 'redux'
import rootReducer from './reducer'
// Load the state from localStorage when the application starts
const savedState = JSON.parse(localStorage.getItem('myApp'))
const startingState = savedState ? savedState : {
  dashboard: {
    dashboardList: [],
  },
  total: {
    totalList: [],
  },
}
const store = createStore(rootReducer, startingState)
store.subscribe(() => {
  // Save the state to localStorage
  localStorage.setItem('myApp', JSON.stringify(store.getState()))
})

export default store
