import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Input from './Input'
import { createUser, updateUser, clearUser } from '../redux/userAction'

const AddUser = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser);
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: ""
    })
    useEffect(() => {
        if (currentUser) {
            const { name, email, username } = currentUser
            setUser({
                name,
                email,
                username
            })
        }
    }, [currentUser])
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdate = e => {
        e.preventDefault()

        dispatch(updateUser({ id: currentUser.id, ...user }))
        setUser({
            name: "",
            email: "",
            username: ""
        })
        dispatch(clearUser())
    }
    const handleCreate = e => {
        e.preventDefault()
        // console.log(user)
        dispatch(createUser(user))
        setUser({
            name: "",
            email: "",
            username: ""
        })
    }
    const { name,
        email,
        username } = user
    return (
        <div className="add-user">
            <h3 className="mb-3">Add User</h3>
            <form>
                <Input onChange={handleChange} type="text" name="name" label="Name" value={name} required />
                <Input onChange={handleChange} type="email" name="email" label="Email" value={email} required />
                <Input onChange={handleChange} type="text" name="username" label="Username" value={username} required />
                {currentUser ? (<button className="btn btn-primary mt-3" onClick={handleUpdate}>Update User</button>) :
                    (<button className="btn btn-primary mt-3" onClick={handleCreate}>Add New User</button>)}

            </form>
        </div>
    )
}

export default AddUser
