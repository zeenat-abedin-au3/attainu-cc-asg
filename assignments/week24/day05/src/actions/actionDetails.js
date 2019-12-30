import { FETCH_ALL_DETAILS, DELETE_SINGLE_DETAILS as DELETE_POST } from "./actionType";

export const fetchAllDetails = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {

            return dispatch({
                type: FETCH_ALL_DETAILS,
                data: json.slice(0, 10)
            })
        })
}

export const deletePost = id => {
    return {
        type: DELETE_POST,
        id: id
    }
}