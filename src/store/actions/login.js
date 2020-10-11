import {LOGIN} from "../types";

const loginAction = (payload) => {
    return {
        type: LOGIN,
        payload: payload
    }
}

export default loginAction