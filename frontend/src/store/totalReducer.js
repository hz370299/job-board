// totalReducer.js
const initialState = {
  totalList: []
}

const totalReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      console.log(action);
      return {
        ...state,
        totalList: action.payload
      }
    default:
      return state
  }
}

export default totalReducer
