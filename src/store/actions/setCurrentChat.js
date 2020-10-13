import {SET_CURRENT_CHAT} from "../types"

const setCurrentChat = payload => {
    return{
        type: SET_CURRENT_CHAT,
        payload: payload
    }
}

export default setCurrentChat