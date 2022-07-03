import {
    LOGIN,
    SIGNUP,
    LOGOUT
} from "../actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    authData: null
}, action) => {
    switch (action.type) {
        case SIGNUP: {
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload.user }));
            localStorage.setItem("token", JSON.stringify(action?.payload.token));
            return { ...state, authData: action?.payload.user };
        }
        case LOGIN: {
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload.user }));
            localStorage.setItem("token", JSON.stringify(action?.payload.token));
            return { ...state, authData: action?.payload.user };
        }
        case LOGOUT: {
            localStorage.clear();
            return { ...state, authData: null };
        }
        default:
            return state;
    }
};
