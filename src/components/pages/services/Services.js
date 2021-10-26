import React, {useEffect, useState} from 'react';
import './services.css';
import Speciality from "../../speciality/Speciality";
import {Row} from "react-bootstrap";

const Services = () => {

    const [speciality, setSpeciality] = useState([]);

    useEffect(() => {
        fetch("./speciality.json")
            .then(res => res.json())
            .then(data => setSpeciality(data))
    }, [])

    return (
        <div className="container">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    speciality.map(special =>
                        <Speciality
                            key={special.key}
                            special={special}
                        >
                        </Speciality>)
                }
            </Row>
        </div>
    );
};

export default Services;