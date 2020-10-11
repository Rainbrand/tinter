import {LOGIN, LOGOUT} from "../types";

let userReducer = (state, action) => {
    switch (action.type){
        case LOGIN:
            return {state: action.payload}
        case LOGOUT:
            return {state: null}
        default:
            return state
    }
}

export default userReducer