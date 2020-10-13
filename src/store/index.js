import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({user: userReducer,
    currentChat: chatReducer})

export default rootReducer