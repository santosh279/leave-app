
import {
    UPLOAD_LEAVE_INFO,
    REQUEST_LEAVE_INFO,
    GET_LEAVE_INFO,
    GET_APPROVED_INFO,
    NEW_LEAVE_UPDATE
} from './constants'


export const setNewLeaves = (data) => ({ type: NEW_LEAVE_UPDATE, payload: data })


export function setLeaveInfo(values, callback) {
    console.log("values:::", values)
    if (values.email !== '' && values.text !== '') {
        let applyleavedata = localStorage.getItem("applyleave") ? localStorage.getItem("applyleave") : '[]'
        applyleavedata = JSON.parse(applyleavedata)
        applyleavedata.push(values)
        const request = localStorage.setItem("applyleave", JSON.stringify(applyleavedata))


        let totalLeavesData = localStorage.getItem("totalLeaves") ? localStorage.getItem("totalLeaves") : '[]'
        totalLeavesData = JSON.parse(totalLeavesData)
        totalLeavesData.push(values)
        localStorage.setItem("totalLeaves", JSON.stringify(totalLeavesData))

        const users = JSON.parse(localStorage.getItem("totalLeaves") || "[]");
        console.log('totalLeaves infromati', users)
        
        return (
            callback(
                {
                    payload: {
                        success: true
                    }
                }
            )
        )
    } else {
        return (
            callback("enter the valid info")
        )
    }
}

export const requestLeaveInfo = () => (dispatch) => {
    console.log("disoatch...", dispatch)
    const users = JSON.parse(localStorage.getItem("applyleave") || "[]");
    console.log('user:::===>>>>===', users)
    dispatch({ type: REQUEST_LEAVE_INFO, payload: users })
}

export const getLeaveInfo = () => (dispatch) => {
    console.log("data inside the actions...", dispatch)
    const users = JSON.parse(localStorage.getItem("applyleave") || "[]");
    dispatch({ type: GET_LEAVE_INFO, payload: users })
}

export const getApprovedInfo = () => (dispatch) => {
    const AP = JSON.parse(localStorage.getItem("approvedInformation") || "[]");
    dispatch({ type: GET_APPROVED_INFO, payload: AP })
}
