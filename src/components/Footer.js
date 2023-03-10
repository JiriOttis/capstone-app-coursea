import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <div className="footer-content">
                    <div className="footer-navigation">
                        <h5>NAVIGATION</h5>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="#">About</NavLink></li>
                            <li><NavLink to="#">Menu</NavLink></li>
                            <li><NavLink to="/reservations">Reservations</NavLink></li>
                            <li><NavLink to="#">Order Online</NavLink></li>
                            <li><NavLink to="#">Login</NavLink></li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 12:00AM</li>
                            <li>Fri: 12:00PM - 1:00AM</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>Address 7854</li>
                            <li>Tel: 111 222 333</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>?? 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
