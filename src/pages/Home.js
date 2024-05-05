import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/OtherBlogs/Blogs';
// import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
// import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
// import Services from '../sections/Services/Services';
// import Testimonial from '../sections/Testimonial/Testimonial';
import design from '../assets/home/content-2@3x.png';
import design2 from '../assets/home/content-3@3x.png';

const Home = () => {
    const designStyle = {
        backgroundImage: `url(${design})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'top',
    };
    const design2Style = {
        backgroundImage: `url(${design2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'top',
    };

    return (
        <>
            <Navbar/>
            <Banner/>
            {/* <Services/> */}
            {/* <Emergency/> */}
            <div style={designStyle}>
            <Expert/>          
            {/* <Features /> */}
            <Blogs/>
            </div>  
            {/* <Testimonial/> */}
            <div div style={design2Style}>
            <Appointment/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;