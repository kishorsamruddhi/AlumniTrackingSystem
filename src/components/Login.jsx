import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.action === 'navtologin') {
            toast.info("Please Login Now");
        }
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        
        if (email === 'admin@gmail.com' && password === 'admin123') {
            localStorage.setItem("user_email", email);
            localStorage.setItem("isAuthenticated", true);
            login();
            navigate("/alumni", { state: { action: "homelogin" } });
        } else {
            setErrors("Invalid email or password.");
        }
    };

    return (
        <>
            <ToastContainer position="top-center" />
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Login Account</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="container-fluid col-lg-6 col-md-8 col-sm-10">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                required
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                required
                                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                            />
                                            <div className='text-danger mt-2'>{errors && errors}</div>
                                            <small className='mt-2 text-muted'>
                                                Don't have an account? <Link to="/signup">Sign up here</Link>
                                            </small>
                                        </div>
                                        <hr className="divider" />
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 text-center">
                                                <button type="submit" className="btn btn-info btn-block">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
