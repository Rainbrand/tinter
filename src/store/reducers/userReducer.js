import {LOGIN, LOGOUT} from "../types";
import initialState from "../initialState";

let userReducer = (state = initialState.user, action) => {
    switch (action.type){
        case LOGIN:
            return state = action.payload
        case LOGOUT:
            return state = null
        default:
            return state
    }
}

export default userReducer