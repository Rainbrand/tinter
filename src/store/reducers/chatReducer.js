import {SET_CURRENT_CHAT} from "../types";
import initialState from "../initialState";

let chatReducer = (state = initialState.currentChat, action) => {
    switch (action.type){
        case SET_CURRENT_CHAT:
            return {id : action.payload.id, name: action.payload.name, avatar: action.payload.avatar}
        default:
            return state
    }
}

export default chatReducer