import { FILTER_USERS, GET_ALL_USERS, UPDATE_USER } from '../actions'

const initialState = {
    users: [],
}

const rootReducer = (state=initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS:{
            return {
                ...state,
                users: action.payload
            }
        }
        case FILTER_USERS:{
            const users = state.users.filter(user => user.nombre.toUpperCase().includes(action.payload.toUpperCase()))
            return{
                ...state,
                users
            }
        }
        case UPDATE_USER:{
            const preUser = state.users[0].nombre
            
            const newUsers = state.users.map((user)=>  user.nombre.includes(preUser) ? {...user, nombre:action.payload} : user )
            return {
                ...state,
                users: newUsers
            }
        }

        default:
            return state
    }
   
}
export default rootReducer;