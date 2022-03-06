import React, { Fragment, useState } from 'react';

const AddUser = () => {
    const [username, setUsername] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { username };
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            if (response.status(200)) {
                console.log("Created User.");
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Register User</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default AddUser;