// dashboardReducer.js
const initialState = {
  dashboardList: [

  ],
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_ITEM':
      const dashboardList = [...state.dashboardList]
      //payload.isUp
      if (action.payload.isUp) {
        const temp = dashboardList[action.payload.index]
        dashboardList[action.payload.index] = dashboardList[action.payload.index - 1]
        dashboardList[action.payload.index - 1] = temp
      } else {
        const temp = dashboardList[action.payload.index]
        dashboardList[action.payload.index] = dashboardList[action.payload.index + 1]
        dashboardList[action.payload.index + 1] = temp
      }
      return {
        ...state,
        dashboardList,
      }
    case 'ADD_ITEM':
      return {
        ...state,
        dashboardList: [...state.dashboardList, action.payload],
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        dashboardList: state.dashboardList.filter((
          item,
          idx,
        ) => idx !== action.payload),
      }
    default:
      return state
  }
}

export default dashboardReducer
