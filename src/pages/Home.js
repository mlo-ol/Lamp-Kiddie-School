import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
<<<<<<< HEAD
import Services from '../sections/Services/Services';
import Testimonial from '../sections/AlumnusTestimonial/Testimonial';
=======
// import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
>>>>>>> 3b4e50bfdea9f660a1e06e189d636fa4de54f543

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            {/* <Services/> */}
            <Emergency/>
            <Features />
            <Expert/>
            {/* <Testimonial/> */}
            <Blogs/>
            {/* <Appointment/> */}
            <Footer/>
        </>
    );
};

export default Home;