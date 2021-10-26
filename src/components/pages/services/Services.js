import React, {useEffect, useState} from 'react';
import './services.css';
import Speciality from "../../speciality/Speciality";
import {Row, Tabs} from "react-bootstrap";
import {Tab} from "bootstrap";
import Rules from "../../rules/Rules";
import {AiFillStar, FiEdit3} from "react-icons/all";

const Services = () => {

    const [speciality, setSpeciality] = useState([]);

    useEffect(() => {
        fetch("./speciality.json")
            .then(res => res.json())
            .then(data => setSpeciality(data))
    }, [])

    const [rules, setRules] = useState([]);

    useEffect(() => {
        fetch("./rules.json")
            .then(res => res.json())
            .then(data => setRules(data))
    }, [])

    return (
        <div className="container service">
            <Tabs defaultActiveKey="special" id="uncontrolled-tab-example" className="mb-5">
                <Tab eventKey="special" title={<AiFillStar/>}>
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
                </Tab>
                <Tab eventKey="rules" title={<FiEdit3/>}>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            rules.map(rule =>
                                <Rules
                                    key={rule.key}
                                    rule={rule}
                                >
                                </Rules>)
                        }
                    </Row>
                </Tab>
            </Tabs>

        </div>
    );
};

export default Services;