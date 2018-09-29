
import {
  UPLOAD_LEAVE_INFO,
  REQUEST_LEAVE_INFO,
  GET_LEAVE_INFO,
  GET_APPROVED_INFO,
  NEW_LEAVE_UPDATE
} from './constants';
import { STATUS_CODES } from 'http';


const initialLeaveInformation = {
  infromation: []
}

export const leavesGiven = (state = initialLeaveInformation, action = {}) => {
  switch (action.type) {
    case NEW_LEAVE_UPDATE:
      return Object.assign({}, state, { information: action.payload })
    default:
      return state
  }
}

const intitialData = {
  data: []
}

export const newLeave = (state = intitialData, action = {}) => {
  console.log('data inside the reducers:::', action.payload)
  switch (action.type) {
    case UPLOAD_LEAVE_INFO:
      return Object.assign({}, state, { data: action.payload })
    default:
      return state;
  }
}

const intialLeaveState = {
  info: []
}
//   const initialStateRobots = {
//     robots: [],
//     isPending: true
//   }

export const requestLeaves = (state = intialLeaveState, action = {}) => {
  switch (action.type) {
    case REQUEST_LEAVE_INFO:
      return Object.assign({}, state, { info: action.payload })
    default:
      return state
  }
}


const initialLeaves = {
  leave: []
}

export const leaveUpdate = (state = initialLeaves, action = {}) => {
  switch (action.type) {
    case GET_LEAVE_INFO:
      return Object.assign({}, state, { leave: action.payload })
    default:
      return state
  }
}

const intialLeaveUpdatedState = {
  leaves: []
}

export const leavesData = (state = intialLeaveUpdatedState, action = {}) => {
  switch (action.type) {
    case GET_APPROVED_INFO:
      return Object.assign({}, state, { leaves: action.payload })
    default:
      return state
  }
}