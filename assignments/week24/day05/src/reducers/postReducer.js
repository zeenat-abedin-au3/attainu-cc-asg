import { FETCH_ALL_DETAILS, DELETE_SINGLE_DETAILS } from "../actions/actionType";

const INITIAL_STATE = {
    posts: []
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_DETAILS:
            return {
                ...state,
                posts: action.data
            }
        case DELETE_SINGLE_DETAILS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }

        default:
            return state
    }
}

export default postReducer


