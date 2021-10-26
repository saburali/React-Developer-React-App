import React from 'react';
import './home.css'
import Speciality from "../../speciality/Speciality";
import Services from "../services/Services";

const Home = () => {
    return (
        <div className="container home">
            <div className="title">
                <h2> Services </h2>
            </div>
            <div className="home-service">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;