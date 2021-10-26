import React, {useEffect, useState} from 'react';
import './about-us.css'
import {Card, Col, Row} from "react-bootstrap";

const AboutUs = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch('./about.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, []);

    return (
        <div className="container about">
            <h2> About Us </h2>
            <h3> আমরা প্রোগ্রামিং হিরো হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি প্রোগ্রামিং হিরো হতে
                চায় তাদের হেল্প করা। তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য
                নতুন জিনিস শিখছি, চেষ্টা করছি। </h3>
            <Row sm={6} md={4} lg={6}>
                {
                    about.map(person => <SinglePerson
                        key={person.key}
                        singlePerson={person}
                    >
                    </SinglePerson>)
                }
            </Row>
        </div>
    );
};

function SinglePerson(props) {

    const {name, position, photo} = props.singlePerson;

    return (
        <Col className="about-container">
            <Card>
                <Card.Img variant="top" src={photo}/>
                <Card.Body>
                    <Card.Text>
                        {position}
                    </Card.Text>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AboutUs;