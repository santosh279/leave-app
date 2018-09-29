import { GET_LEAVE_INFO } from './constants'


export const getLeaveInfo = () => (dispatch) => {
    console.log("disoatch...", dispatch)
    const users = JSON.parse(localStorage.getItem("applyleave") || "[]");
    dispatch({ type: GET_LEAVE_INFO, payload: users })
}