import { FILTER_USERS, GET_ALL_USERS, UPDATE_USER } from '../actions'

const initialState = {
    users: [],
}

const rootReducer = (state=initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS:{
            return {
                ...state,
                users: action.payload.results
            }
        }
        case FILTER_USERS:{
            const users = state.users.filter(user=> user.name.first === action.payload)
            return{
                ...state,
                users
            }
        }
        case UPDATE_USER:{
            const preUser = state.users[0].name.first
            console.log(preUser)
            const newUsers = state.users.map((user)=>  user.name.first === preUser ? {...user, name:action.payload} : user )
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