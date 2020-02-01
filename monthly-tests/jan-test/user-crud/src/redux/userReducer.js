import { CREATE_USER, UPDATE_USER, DELETE_USER, SET_USER, CLEAR_USER } from "./ActionType"

const INTIAL_STATE = {
    users: [{
        id: "37087474-bca3-4000-a864-93a8c36734e5",
        name: "John Doe",
        email: "john.doe@gmail.com",
        username: "jdoe"
    }],
    currentUser: null
}
const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return (
                            { ...user, ...action.payload }
                        )
                    }
                    return user
                })
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case CLEAR_USER:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
}

export default userReducer