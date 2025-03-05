import React from 'react';
import logo from "../assets/uploads/logo.png";

const About = () => {
  const system = {
    name: "TGPCET Alumni Tracking System",
    about_content: `
    <h3><strong>About TGPCET Alumni Tracking System</strong></h3>
    <p>The TGPCET Alumni Tracking System is designed to enhance alumni engagement and strengthen connections between past and present students.</p>
    
    <h4><strong>Our Vision</strong></h4>
    <ul>
      <li>To build a strong and interactive alumni network.</li>
      <li>To provide mentorship and career growth opportunities.</li>
      <li>To facilitate seamless communication between alumni and students.</li>
    </ul>
    
    <h4><strong>Key Features</strong></h4>
    <ul>
      <li><strong>📌 Alumni Directory:</strong> Easily find and connect with fellow alumni.</li>
      <li><strong>🔗 Networking Opportunities:</strong> Get career guidance, mentorship, and referrals.</li>
      <li><strong>💬 Interactive Forums:</strong> Participate in discussions and share industry insights.</li>
      <li><strong>🎉 Event Announcements:</strong> Stay updated on alumni meets, workshops, and webinars.</li>
      <li><strong>🏆 Achievements Showcase:</strong> Celebrate alumni milestones and inspire students.</li>
    </ul>
    
    <h4><strong>Developed by CSE Data Science Students</strong></h4>
    <p>This system is a result of the dedication and technical expertise of students from the CSE Data Science Department. Our aim is to create a professional and user-friendly platform that enhances alumni engagement and fosters meaningful connections.</p>
    `
  };

  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="row mt-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end mb-4" style={{ background: "#0000002e", borderRadius: "10px", padding: "20px" }}>
              <h2 className="text-uppercase text-white font-weight-bold">About Us</h2>
              <hr className="divider my-4" />
              <p className="text-white-75 text-light mb-5">{system.name}</p>
            </div>
          </div>
        </div>
      </header>
      
      <section className="page-section">
        <div className="container">
          <h2 className='text-center'>{system.name}</h2>
          <br />
          <div dangerouslySetInnerHTML={{ __html: system.about_content }}></div>
        </div>
      </section>
    </>
  );
};

export default About;
