import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { FiBook, FiUsers, FiClipboard, FiTool } from 'react-icons/fi';
import { FaCalendar, FaQuoteLeft } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import { useTheme } from '../ThemeContext';
import imgcs from "../assets/uploads/imgcs.jpg";
import { baseUrl } from '../utils/globalurl';

const Home = () => {
    const { theme } = useTheme();
    const { isLoggedIn, isAdmin } = useAuth();
    const [events, setEvents] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            const user_name = localStorage.getItem("user_name");
            if (location.state && location.state.action === 'homelogin') {
                toast.success(`Welcome ${user_name}`);
            }
        }
        if (location.state && location.state.action === 'homelogout') {
            toast.info("Logout Success");
        }
    }, [location.state]);

    useEffect(() => {
        axios.get(`${baseUrl}auth/up_events`)
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err));
    }, []);

    const formatDate = (timestamp) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(timestamp).toLocaleDateString('en-US', options);
    };

    return (
        <div>
            <ToastContainer hideProgressBar position="top-center" pauseOnHover={false} pauseOnFocusLoss={false} />
            <header className="masthead" style={{ backgroundImage: `url(${imgcs})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="text-white font-weight-bold display-3 mb-4">Welcome to TGPCET ALUMNI</h1>
                            <p className="text-white-75 font-weight-light lead mb-5">Connecting Data Science Alumni Across The Globe</p>
                            {!isAdmin && <Link className="btn btn-primary btn-xl" to="about">Find Out More</Link>}
                            {!isLoggedIn && <Link className="btn btn-info ms-2 btn-xl" to="login">Login</Link>}
                            {isLoggedIn && isAdmin && <Link className="btn btn-primary btn-xl" to="dashboard">Admin Dashboard</Link>}
                            {isLoggedIn && !isAdmin && <Link className="btn btn-info ms-2 btn-xl" to="account">Profile</Link>}
                        </div>
                    </div>
                </div>
            </header>

            <section className={`py-5 bg-${theme}`} id="upcoming-events">
                <div className="container">
                    <h2 className="section-heading text-center text-primary">Upcoming Events</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        {events.length > 0 ? events.map((e, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card event-list shadow-sm p-3">
                                    <div className="card-body text-center">
                                        <h3 className="text-info">{e.title}</h3>
                                        <p><FaCalendar className='me-1' />{formatDate(e.schedule)}</p>
                                        <p className="text-muted" dangerouslySetInnerHTML={{ __html: e.content }}></p>
                                        <button className="btn btn-primary" onClick={() => navigate("events/view", { state: { action: "view", data: e } })}>Read More</button>
                                    </div>
                                </div>
                            </div>
                        )) : <h4 className='text-center text-danger'>No Upcoming Events Available</h4>}
                    </div>
                </div>
            </section>

            <section className={`py-5 bg-light`} id="success-stories">
                <div className="container">
                    <h2 className="section-heading text-center text-success">Success Stories</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-lg p-3">
                                <FaQuoteLeft size={40} className="text-warning" />
                                <p className="mt-3">"Thanks to the alumni network, I landed my dream job at Google!"</p>
                                <h5 className="text-primary">- Student 1</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-lg p-3">
                                <FaQuoteLeft size={40} className="text-warning" />
                                <p className="mt-3">"The career support services helped me switch to data science successfully."</p>
                                <h5 className="text-primary">- Student 2</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-lg p-3">
                                <FaQuoteLeft size={40} className="text-warning" />
                                <p className="mt-3">"Reconnecting with alumni gave me great business opportunities."</p>
                                <h5 className="text-primary">- Student 3</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
