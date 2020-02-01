import { CREATE_USER, UPDATE_USER, DELETE_USER, SET_USER, CLEAR_USER } from "./ActionType"
import uuidV4 from 'uuid/v4'

export const createUser = (user) => ({
    type: CREATE_USER,
    payload: {
        id: uuidV4(),
        ...user
    }
})

export const updateUser = user => ({
    type: UPDATE_USER,
    payload: user
})

export const deleteUser = id => ({
    type: DELETE_USER,
    payload: id
})
export const setUser = user => ({
    type: SET_USER,
    payload: user
})

export const clearUser = () => ({
    type: CLEAR_USER
})