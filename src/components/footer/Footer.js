import React from 'react';
import './footer.css'
import {FiFacebook, FiGithub, FiYoutube} from "react-icons/all";
import {NavLink} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="pt-5 pb-4">
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-title">Some words</div>
                        <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
                            laborum. Earum delectus perferendis aspernatur iste quas facere non ipsa cupiditate illo
                            facilis molestias maiores obcaecati quod nemo praesentium, quia odit, iusto mollitia,
                            molestiae libero a!</p>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-title">Menus</div>
                        <NavLink to="/" className="button">Home</NavLink>
                        <NavLink to="/question" className="button">Faq</NavLink>
                        <NavLink to="/services" className="button">Service</NavLink>
                        <NavLink to="/about-us" className="button">About Us</NavLink>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-title">Quick Links</div>
                        <NavLink to="/contact" className="button">Contact Us</NavLink>
                        <NavLink to="#!" className="button">Click Me</NavLink>
                        <a href="https://saburali.me" target="_blank" className="button nav-link">Portfolio</a>
                        <NavLink to="/email" className="button">contact@saburali.me</NavLink>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container d-flex justify-content-between mt-4 mb-1">
                <p className="details copy m-0"> Copyright &copy; 2020 All Rights Reserved By <a href="https://saburali.me" target="_blank" className="button p-0 fw-bold">Sabur Ali</a>
                </p>
                <p className="icon">
                    <a href="https://youtube.com/saburali" target="_blank"><FiYoutube className="i"/></a>
                    <a href="https://github.com/saburali.me" target="_blank"><FiGithub className="i"/></a>
                    <a href="https://facebook.com/saburali.me" target="_blank"><FiFacebook className="i"/></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;