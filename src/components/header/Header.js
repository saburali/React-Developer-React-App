import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/services"> Services </NavLink>
                            <NavLink className="nav-link" to="/question"> Question </NavLink>
                            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            <Nav.Link eventKey={2} to="/contact"> Contact </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;