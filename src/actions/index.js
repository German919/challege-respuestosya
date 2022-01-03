import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const FILTER_USERS = "FILTER_USERS";
export const UPDATE_USER = "UPDATE_USER";

export const getAllUsers = () => {
    return async function(dispatch) {
        const users = await axios.get("https://randomuser.me/api/?results=20")
        return dispatch({ 
            type : GET_ALL_USERS,
            payload : users.data
            }
        )
    }
}

export const filterName = (payload) => {
    return {
        type: FILTER_USERS,
        payload
    }
}

export const updateName = (payload) => {
    return {
        type: UPDATE_USER,
        payload
    }
}