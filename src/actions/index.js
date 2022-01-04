import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const FILTER_USERS = "FILTER_USERS";
export const UPDATE_USER = "UPDATE_USER";


const normalize = (users) => {
    const newUsers = users.data.results.map( user => {
        return {
            nombre : `${user.name.first}, ${user.name.last}`,
            // apellido : user.name.last,
            calle : user.location.street.name + user.location.street.number,
            ciudad : user.location.city,
            provincia : user.location.state,
            pais : user.location.country,
            postal : user.location.postcode,
            latitud : user.location.coordinates.latitude,
            longitud : user.location.coordinates.longitude,
        }
    } )
    return newUsers
}
export const getAllUsers = () => {
    return async function(dispatch) {
        const users = await axios.get("https://randomuser.me/api/?results=20")
        const newUsers = normalize(users)
        return dispatch({   
            type : GET_ALL_USERS,
            payload : newUsers
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