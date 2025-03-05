import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import i1 from "../assets/img/i1.jpg";
import i2 from "../assets/img/i2.jpg";
import i3 from "../assets/img/i3.jpg";
import i4 from "../assets/img/i4.jpg";
import i5 from "../assets/img/i5.jpg";
import i6 from "../assets/img/i6.jpg";
import i7 from "../assets/img/i7.jpg";
import i8 from "../assets/img/i8.jpg";
import i9 from "../assets/img/i9.jpg";
import i10 from "../assets/img/i10.jpg";
import defaultavatar from "../assets/uploads/defaultavatar.jpg";

const AlumniList = () => {
    const [alumniList, setAlumniList] = useState([]);
    const [filteredAlumni, setFilteredAlumni] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const sampleAlumni = [
            { name: "Kajal Patle", email: "Kajal-Patle@gmail.com", branch: "Computer Science", batch: "2020", designation: "Software Engineer", verified: true, avatar: i1 },
            { name: "Ajay Satpute", email: "jane@example.com", branch: "Electronics", batch: "2019", designation: "Project Manager", verified: false, avatar: i2 },
            { name: "Shivani Deshmukh", email: "robert@example.com", branch: "Mechanical", batch: "2018", designation: "Senior Analyst", verified: true, avatar: i3 },
            { name: "Priyanshi Sankhe", email: "emily@example.com", branch: "Civil Engineering", batch: "2021", designation: "Site Engineer", verified: false, avatar: i4 },
            { name: "Soumya Singh", email: "michael@example.com", branch: "IT", batch: "2017", designation: "CTO", verified: true, avatar: i5 },
            { name: "Harkesh Devangan", email: "sarah@example.com", branch: "Computer Science", batch: "2022", designation: "Research Scientist", verified: false, avatar: i6 },
            { name: "Smita Burevar", email: "david@example.com", branch: "AI & ML", batch: "2020", designation: "AI Engineer", verified: true, avatar: i7 },
            { name: "Varris Rana", email: "sophia@example.com", branch: "Computer Science", batch: "2016", designation: "Financial Analyst", verified: true, avatar: i8 },
            { name: "Nohel Rahangade", email: "chris@example.com", branch: "Computer Science", batch: "2015", designation: "Software Engineer", verified: true, avatar: i9 },
            { name: "Faarin Ansari", email: "jessica@example.com", branch: "Computer Science", batch: "2019", designation: "Software Engineer", verified: false, avatar: i10 }
        ];
        
        localStorage.setItem("alumniList", JSON.stringify(sampleAlumni));
        const storedAlumni = JSON.parse(localStorage.getItem("alumniList")) || [];
        setAlumniList(storedAlumni);
        setFilteredAlumni(storedAlumni);
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        const filteredList = alumniList.filter(list =>
            list.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            list.branch.toLowerCase().includes(e.target.value.toLowerCase()) ||
            list.batch.toString().includes(e.target.value)
        );
        setFilteredAlumni(filteredList);
    };

    return (
        <>
            <header className="masthead text-center bg-primary text-white py-4">
                <h3 className="mb-0">Alumni List</h3>
            </header>

            <div className="container mt-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FaSearch />
                            </span>
                            <input
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                type="text"
                                className="form-control"
                                placeholder="Search by name, branch, or batch"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    {filteredAlumni.map((a, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <center>
                                    <img
                                        src={a.avatar || defaultavatar}
                                        className="card-img-top img-fluid rounded-circle mt-3"
                                        style={{ width: '140px', height: '140px', objectFit: 'cover', border: '3px solid #ddd' }}
                                        alt="avatar"
                                    />
                                </center>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{a.name}</h5>
                                    <p className="text-muted">{a.designation}</p>
                                    <p><strong>Email:</strong> {a.email}</p>
                                    <p><strong>Branch:</strong> {a.branch}</p>
                                    <p><strong>Passout Year:</strong> {a.batch}</p>
                                    <span className={`badge ${a.verified ? 'bg-success' : 'bg-warning'}`}>
                                        {a.verified ? "Verified" : "Unverified"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlumniList;
