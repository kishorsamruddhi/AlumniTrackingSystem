import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-4 text-white" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
      <div className="container text-center">
        <h3 className="text-light mb-3">Stay Connected</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex flex-column align-items-center mb-3">
            <FaPhone className="fa-2x mb-2 text-primary" />
            <p className="mb-0">(+92) 61 9210134</p>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center mb-3">
            <FaEnvelope className="fa-2x mb-2 text-danger" />
            <a href="mailto:Alumini@gmail" className="text-white text-decoration-none">Alumini@gmail</a>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center mb-3">
            <FaMapMarkerAlt className="fa-2x mb-2 text-success" />
            <p className="mb-0">TGPCET, Nagpur, India</p>
          </div>
        </div>

        <hr className="divider my-4 border-light" />

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="/events" className="text-white text-decoration-none">Events</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white"><FaLinkedin size={25} /></a>
              <a href="#" className="text-white"><FaTwitter size={25} /></a>
              <a href="#" className="text-white"><FaGithub size={25} /></a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Subscribe</h5>
            <p>Get the latest updates</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-4 small text-center text-light">
          &copy; 2024 TGPCET | {'</> by '}
          <a href="https://junaidrana.vercel.app/" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
            Technolits <GoVerified style={{ fontSize: '12px', marginLeft: '2px', color: '#03b3ff' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
