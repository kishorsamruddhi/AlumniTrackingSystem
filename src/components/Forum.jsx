import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaComments, FaPlus, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import ManageForum from '../admin/save/ManageForum';
import { baseUrl } from '../utils/globalurl';

const Forum = () => {
    const { isLoggedIn } = useAuth();
    const [forum, setForum] = useState([]);
    const [filteredForum, setFilteredForum] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [handleAdd, setHandleAdd] = useState(false);

    useEffect(() => {
        axios.get(`${baseUrl}auth/forums`)
            .then((res) => setForum(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleView = (topic) => {
        navigate("/forum/view", { state: { action: "view", data: topic } });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [handleAdd]);

    useEffect(() => {
        setFilteredForum(forum.filter(topic =>
            topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            topic.description.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, forum]);

    const featuredTopics = [
        { title: "Breaking into Tech: Tips for Beginners", description: "Share your experiences and advice for those new to the tech industry." },
        { title: "Remote Work vs. Office: Which is Better?", description: "Discuss the pros and cons of remote work compared to traditional office jobs." },
        { title: "AI and the Future of Jobs", description: "How is AI reshaping careers and what skills will be in demand?" },
        { title: "Best Programming Languages in 2025", description: "What are the top programming languages to learn this year?" },
        { title: "Mental Health in the Workplace", description: "How can companies support employees' mental health?" }
    ];

    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Forum Discussions</h3>
                            <hr className="divider my-4" />
                            {isLoggedIn && !handleAdd && (
                                <button onClick={() => setHandleAdd(true)} className="btn btn-primary col-sm-4">
                                    <FaPlus /> Create New Topic
                                </button>
                            )}
                            {!isLoggedIn && <p className='text-white'>Please log in to create a new topic.</p>}
                        </div>
                    </div>
                </div>
            </header>
            {handleAdd ? (
                <div className="container mt-5 pt-2">
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <ManageForum setHandleAdd={setHandleAdd} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mt-3 pt-2">
                    <h4 className="text-center text-primary">Featured Discussions</h4>
                    <div className="divider"></div>
                    <div className="row g-4">
                        {featuredTopics.map((topic, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-body text-center">
                                        <h5 className="text-dark">{topic.title}</h5>
                                        <p>{topic.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card mb-4 mt-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="filter-field"><FaSearch /></span>
                                        <input 
                                            value={searchQuery} 
                                            onChange={(e) => setSearchQuery(e.target.value)} 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Search topics..." 
                                            aria-label="Search" 
                                            aria-describedby="filter-field" 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-primary btn-block btn-sm">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {filteredForum.length > 0 ? (
                        filteredForum.map((topic, index) => (
                            <div className="card shadow-sm mb-3" key={index}>
                                <div className="card-body">
                                    <h4 className="text-dark">{topic.title}</h4>
                                    <hr />
                                    <p className="text-muted" dangerouslySetInnerHTML={{ __html: topic.description }}></p>
                                    <div className='d-flex justify-content-between align-items-center mt-3'>
                                        <div>
                                            <span className="badge bg-info text-dark px-3 me-2">
                                                <b>By: {topic.created_by}</b>
                                            </span>
                                            <span className="badge bg-secondary px-3">
                                                <FaComments /> {topic.comments_count} Comments
                                            </span>
                                        </div>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => handleView(topic)}>View Topic</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-4">
                            <p className='text-muted'>No topics available.</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Forum;