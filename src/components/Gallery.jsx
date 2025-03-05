import React, { useEffect, useState } from 'react';  
import { FaSearch } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing Local Images
import img1 from '../assets/img/img1.jpeg';
import img2 from '../assets/img/img2.jpeg';
import img3 from '../assets/img/img3.jpeg';
import img4 from '../assets/img/img4.jpeg';
import img5 from '../assets/img/img5.jpeg';
import img6 from '../assets/img/img6.jpeg';
// import img7 from '../assets/img/img7.jpeg';



const Gallery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [stories, setStories] = useState([]);
    const [events, setEvents] = useState([]);
    const [wallOfFame, setWallOfFame] = useState([]);

    useEffect(() => {
        const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
        const storedStories = JSON.parse(localStorage.getItem("stories")) || [];
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        const storedWallOfFame = JSON.parse(localStorage.getItem("wallOfFame")) || [];

        setVideos(storedVideos);
        setStories(storedStories);
        setEvents(storedEvents);
        setWallOfFame(storedWallOfFame);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <>
            <style>
                {`
                .event-card {
                    transition: transform 0.3s ease-in-out;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                }

                .event-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
                }

                .event-image {
                    height: 220px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 10px 10px 0 0;
                }

                .story-card {
                    border-radius: 10px;
                    overflow: hidden;
                    background: #f8f9fa;
                    transition: all 0.3s ease-in-out;
                    padding: 15px;
                }

                .story-card:hover {
                    transform: scale(1.03);
                }

                .story-image {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .divider {
                    width: 60px;
                    height: 3px;
                    background: #007bff;
                    margin: 10px auto;
                }
                `}
            </style>

            <header className="masthead text-center">
                <h3 className="text-primary">Gallery & Alumni Highlights</h3>
                <div className="divider"></div>
            </header>

            {/* Search Bar */}
            <div className="container mt-4">
                <div className="input-group mb-3">
                    <span className="input-group-text"><FaSearch /></span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search gallery..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Alumni Events Gallery */}
            <div className="container mt-5">
                <h4 className="text-center text-primary">Alumni Events Gallery</h4>
                <div className="divider"></div>
                <div className="row g-4">
                    {[
                        { src: img2, title: "Graduation Ceremony" },
                        { src: img5, title: "Networking Meet" },
                        { src: img3, title: "Graduation Ceremony" },
                        { src: img4, title: "Guest Lectures" },
                        { src: img1, title: "Graduation Ceremony" },
                        { src: img6, title: "Workshops & Training" }
                    ].map((event, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card event-card">
                                <img src={event.src} className="event-image" alt={event.title} />
                                <div className="card-body text-center">
                                    <h5 className="text-dark">{event.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alumni Video Testimonials */}
            <div className="container mt-5">
                <h4 className="text-center">Alumni Video Testimonials</h4>
                <Carousel responsive={responsive}>
                    {videos.map((video, index) => (
                        <div key={index} className="video-card">
                            <img src={video.thumbnail} className="video-thumbnail" alt={video.title} />
                            <iframe width="100%" height="200" src={video.url} title={video.title} allowFullScreen></iframe>
                            <p className="text-center mt-2">{video.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Success Stories */}
            <div className="container mt-5">
                <h4 className="text-center">Success Stories</h4>
                <div className="divider"></div>
                <div className="row">
                    {stories.map((story, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card story-card">
                                <img src={img6} className="story-image" alt={story.name} />
                                <h5>{story.name}</h5>
                                <p>{story.story}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wall of Fame */}
            <div className="container mt-5 mb-5">
                <h4 className="text-center">Wall of Fame</h4>
                <div className="divider"></div>
                <div className="row">
                    {wallOfFame.map((alumni, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card wall-card">
                                <img src={img7} className="wall-image" alt={alumni.name} />
                                <div className="card-body text-center">
                                    <h5>{alumni.name}</h5>
                                    <p><strong>{alumni.achievement}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
