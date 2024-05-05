import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
// import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
// import Symptoms from '../sections/Symptoms/Symptoms';
// import Appointment from '../sections/Appointment/Appointment';

const Services = () => {
    return (
        <>
            <Navbar />
            <Gallery />
            {/* <ServiceBanner /> */}
            {/* <Symptoms /> */}
            {/* <Appointment /> */}
            <Footer />
        </>
    );
};

export default Services;