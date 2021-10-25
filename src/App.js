import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/css/App.css';

import Home from './components/pages/home/Home';
import Header from './components/header/Header';
import Services from './components/pages/services/Services';
import AboutUs from './components/pages/about-us/AboutUs';
import Faq from "./components/pages/faq/Faq";
import Contact from './components/pages/contact/Contact';
import EmptyPage from './components/pages/empty-page/EmptyPage';
import Footer from './components/footer/Footer';
import TopNav from "./components/topNav/TopNav";
import FrontTitle from "./components/front-title/Front-Title";
import React from "react";
import Banner from "./components/banner/Banner";

function App() {
    return (
        <div>
            <Router>
                <TopNav></TopNav>
                <FrontTitle></FrontTitle>
                <Header></Header>
                <Banner></Banner>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs></AboutUs>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/question">
                        <Faq></Faq>
                    </Route>
                    <Route path="*">
                        <EmptyPage></EmptyPage>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
