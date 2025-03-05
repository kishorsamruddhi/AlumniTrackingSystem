import React, { useEffect, useState } from 'react';
import { FaBuilding, FaMapMarker, FaPlus, FaSearch } from 'react-icons/fa';

const Careers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJob, setFilteredJob] = useState([]);
    const [handleAdd, setHandleAdd] = useState(false);

    // Sample job data posted by alumni
    const jobs = [
        {
            title: "Software Engineer",
            company: "Google",
            location: "Pune",
            description: "Join our dynamic engineering team to build innovative software solutions.",
            company_logo: "/google-logo.png",
            poster_avatar: "/alumni1.jpg",
            name: "Kajal Patle;(Class of 2015)"
        },
        {
            title: "Full Stack Developer",
            company: "Microsoft",
            location: "pune",
            description: "We are looking for a skilled Full Stack Developer to create scalable software solutions.",
            company_logo: "/microsoft-logo.png",
            poster_avatar: "/alumni2.jpg",
            name: "Nohel Ranangade (Class of 2017)"
        },
        {
            title: "Backend Engineer",
            company: "Amazon",
            location: "Nagpur",
            description: "Design and develop robust backend systems for high-scale applications.",
            company_logo: "/amazon-logo.png",
            poster_avatar: "/alumni3.jpg",
            name: "Soumya Singh (Class of 2016)"
        },
        {
            title: "Frontend Developer",
            company: "Meta",
            location: "Banglore",
            description: "Seeking an experienced frontend developer to enhance our user experience.",
            company_logo: "/meta-logo.png",
            poster_avatar: "/alumni4.jpg",
            name: "Varris Rana (Class of 2018)"
        },
        {
            title: "Data Scientist",
            company: "Netflix",
            location: "Nagpur",
            description: "Analyze large datasets and improve recommendation algorithms.",
            company_logo: "/netflix-logo.png",
            poster_avatar: "/alumni5.jpg",
            name: "Farrin Ansari(Class of 2014)"
        }
    ];

    useEffect(() => {
        const filteredCareer = jobs.filter(career =>
            career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            career.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredJob(filteredCareer);
    }, [searchQuery]);

    return (
        <>
            <header className="masthead text-center">
                <h3 className="text-white">Alumni Job Board</h3>
                <hr className="divider my-4" />
                {!handleAdd && (
                    <button onClick={() => setHandleAdd(true)} className="btn btn-primary">
                        <FaPlus /> Post a Job
                    </button>
                )}
            </header>

            <div className="container mt-3">
                <div className="input-group mb-3">
                    <span className="input-group-text"><FaSearch /></span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {filteredJob.length > 0 ? (
                    filteredJob.map((j, index) => (
                        <div className="card job-list mb-3" key={index}>
                            <div className="card-body d-flex">
                                <img src={j.company_logo} alt="Company Logo" className="company-logo mr-3" />
                                <div className="job-info">
                                    <h4><b>{j.title}</b></h4>
                                    <p><FaBuilding /> <b>{j.company}</b></p>
                                    <p><FaMapMarker /> {j.location}</p>
                                    <p className="text-muted truncate">{j.description}</p>
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="d-flex align-items-center">
                                            <img src={j.poster_avatar} alt="Profile" className="poster-avatar mr-2" />
                                            <span className="text-muted"><i>Posted by: {j.name}</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-muted mt-4">No job postings available</div>
                )}
            </div>

            <style jsx>{`
                .company-logo {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 5px;
                }
                .poster-avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
                .truncate {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 80%;
                }
            `}</style>
        </>
    );
};

export default Careers;
