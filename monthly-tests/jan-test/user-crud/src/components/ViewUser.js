import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUser, deleteUser } from '../redux/userAction';

const ViewUser = () => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const handleEdit = user => {
        dispatch(setUser(user))
    }
    const handleDelete = id => {
        dispatch(deleteUser(id))
    }
    return (
        <div className="view-user">
            <h3 className="mb-3">View users</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(user => (
                        <tr className="user-row" key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td className="actions">
                                <button className="btn btn-outline-secondary" onClick={() => handleEdit(user)}>EDIT</button>
                                <button className="btn btn-outline-secondary" onClick={() => handleDelete(user.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewUser
