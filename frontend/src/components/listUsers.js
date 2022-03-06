import React, { Fragment, useState, useEffect } from 'react';
import EditUser from './editUser';

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users");
            const jsonData = await response.json();
            setUsers(jsonData);
            setLoaded(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/user/${id}`, {
                method: "DELETE"
            });
            setUsers(users.filter(user => user.u_id != id));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => { getUsers(); }, []);

    useEffect(() => { console.log("Users Fetched! - ", users); }, [users]);

    return (
        <Fragment>
            <h1 className="text-center mt-5">User List</h1>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>USERNAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.u_id}</td>
                            <td>{user.username}</td>
                            <td><EditUser user={user} idx={idx} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteUser(user.u_id)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );

};

export default ListUsers;