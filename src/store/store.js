import {createStore} from "redux";
import userReducer from "./reducers/userReducer";
import initialState from "./initialState";

let store = createStore(userReducer, initialState)

export default store