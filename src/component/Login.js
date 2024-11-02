import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = "admin@gmail.com";
        const password = "admin123!@";

        if (credentials.email === email && credentials.password === password) {
            props.showAlert("Logged in successfuly", "success");
            history('/')
        } else {
            props.showAlert("Invalid Details", "danger");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "250px" }}>
            <div className="container card shadow-sm card-outline card-primary" style={{ width: "22%" }}>
                <div className="card-body">
                    <p className="login-box-msg">Login to start your session</p>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" value={credentials.email} id='email' name='email' placeholder="Email" onChange={onChange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" value={credentials.password} id='password' name='password' placeholder="Password" onChange={onChange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            {/* <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div> */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </div>
                    </form>
                    <p className="mb-1 mt-3">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login