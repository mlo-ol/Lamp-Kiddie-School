import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import VisionMission from '../sections/Vision-Mission/VM';
import History from '../sections/History/History';
import Faculty from '../sections/Faculty/Faculty';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <VisionMission />
            <History />
            <Faculty />
            <Footer />
        </>
    );
};

export default About;