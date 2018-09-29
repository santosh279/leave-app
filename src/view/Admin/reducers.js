import { GET_LEAVE_INFO } from './constants'

const intialLeaveState = {
    data: []
}  

export const requestLeaves = (state=intialLeaveState, action={}) => {
    switch (action.type) {
    case GET_LEAVE_INFO:
        return Object.assign({}, state, {data: action.payload})
      default:
        return state
    }
  }