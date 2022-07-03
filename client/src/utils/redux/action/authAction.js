import {
    LOGIN, 
    SIGNUP,
    LOGOUT
} from "../actionTypes";
import * as api from "../api";

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        console.log(data);
        dispatch({ type: SIGNUP, payload: data});
        navigate("/home");

    } catch (e) {
        console.log(e);
    }
};

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        console.log(data);
        dispatch({ type: LOGIN, payload: data});
        navigate("/home");
    } catch (e) {
        console.log(e);
    }
};

export const logout = (navigate) => async (dispatch) => {
    dispatch({ type: LOGOUT });
    navigate("/login");
}

