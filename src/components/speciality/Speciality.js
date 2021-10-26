import React from 'react';
import './speciality.css';
import {Card, Col} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';

const Speciality = (props) => {

    const {title, description, image} = props.special;

    return (
        <Col>
            <Card>
                <Card.Img className="mg-thumbnail" variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Scrollbars style={{height: 140}} autoHide>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Scrollbars>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Speciality;