import React from 'react';
import {Col} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';
import './rules.css';

const Rules = (props) => {

    const {title, description} = props.rule;

    return (
        <Col className="rules">
            <div className="rules-card">
                <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="flex-grow-1 ms-3 description">
                        {description}
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Rules;