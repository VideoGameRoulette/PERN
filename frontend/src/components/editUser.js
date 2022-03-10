import React, { Fragment, useState } from 'react';

const EditUser = ({ user, idx }) => {
    const [username, setUsername] = useState(user.username);
    const [retro, setRetroData] = useState(user.retro);

    const UpdateUsername = async (e) => {
        e.preventDefault();
        try {
            const body = { username };
            const response = await fetch(`/api/user/${user.u_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    };

    const UpdateRAUsername = async (e) => {
        e.preventDefault();
        try {
            const body = { retro };
            const response = await fetch(`/api/rauser/${user.u_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    };

    const UpdateAll = async (e) => {
        UpdateUsername(e);
        UpdateRAUsername(e);
    }

    const getRA = () => {
        if (retro !== null) {
            return retro.username;
        }
        return '';
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${idx}`}>
                Edit
            </button>

            {/* <!-- The Modal --> */}
            <div className="modal" id={`id${idx}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                            <input type="text" className="form-control" value={getRA()} onChange={e => setRetroData({ username: e.target.value })} />
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={e => UpdateAll(e)}>Edit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditUser;