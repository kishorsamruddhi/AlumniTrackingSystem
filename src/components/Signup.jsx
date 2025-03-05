import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        userType: "",
        alumnusPlaceholder: ""
    });

    const navigate = useNavigate();

    // Frontend-only signup function (stores user in localStorage)
    const signup = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Check if user already exists
        if (users.some(user => user.email === email)) {
            toast.warning("User already exists!");
            return;
        }

        // Save new user
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        toast.success("Signup successful!");
        navigate("/alumni"); // Redirect after signup
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Ensure required fields are filled
        if (!values.email || !values.password) {
            toast.error("Please fill in all required fields.");
            return;
        }

        // Call the local signup function
        signup(values.email, values.password);
    };

    return (
        <>
            <ToastContainer position="top-center" hideProgressBar />
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Create Account</h3>
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
                                <div className="container col-lg-6 col-md-8 col-sm-10">
                                    <form onSubmit={handleSubmit} id="create_account">
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Name</label>
                                            <input onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" className="form-control" id="name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="control-label">Email</label>
                                            <input onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" className="form-control" id="email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="control-label">Password</label>
                                            <input onChange={(e) => setValues({ ...values, password: e.target.value })} type="password" className="form-control" id="password" name="password" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userType" className="control-label">User Type</label>
                                            <select onChange={(e) => setValues({ ...values, userType: e.target.value })} className="custom-select" id="userType" name="userType" required defaultValue="">
                                                <option value="" disabled hidden>Please select</option>
                                                <option value="alumnus">Alumnus</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </div>
                                        {values.userType === "alumnus" && (
                                            <div className="form-group">
                                                <label htmlFor="alumnusPlaceholder" className="control-label">Branch/Course</label>
                                                <input onChange={(e) => setValues({ ...values, alumnusPlaceholder: e.target.value })} type="text" className="form-control" id="alumnusPlaceholder" name="alumnusPlaceholder" placeholder="Branch/Course" required />
                                            </div>
                                        )}
                                        <hr className="divider" />
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 text-center">
                                                <button type="submit" className="btn btn-info btn-block">Create Account</button>
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

export default Signup;
