import React from 'react';
import {NavLink} from "react-bootstrap";
import {FiFacebook, FiGithub, FiLink, FiYoutube} from "react-icons/all";

import './top-nav.css';

const TopNav = () => {
    return (
        // Top Nav
        <div class="topNav py-2">
            <div class="container d-flex justify-content-between">
                <select>
                    <option value="light"> Light </option>
                    <option value="dark"> Dark </option>
                </select>
                <div className="icon">
                    <NavLink to="https://saburali.me" target="_blank"> <FiLink/> </NavLink>
                    <NavLink href="https://youtube.com/saburali" target="_blank"> <FiYoutube/> </NavLink>
                    <NavLink href="https://facebook.com/saburali.me" target="_blank"> <FiFacebook/> </NavLink>
                    <NavLink href="https://github.com/saburali" target="_blank"> <FiGithub/> </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopNav;