import React, { Component, useState } from 'react';
import swal from 'sweetalert';

const LoginForm = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleValidate = (e) => {
        e.preventDefault();
        if (user === 'raas@gmail.com' && pass == 1234) {
            swal('successfull login', 'welcome reacjs', 'success')
        } else {
            swal('wrong Creditials', 'please try again', 'error')
        }
    }

    return (
        <form onSubmit={handleValidate}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email"
                    value={user}
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password"
                    value={pass}
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}


export default LoginForm;

