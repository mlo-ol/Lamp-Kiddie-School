import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Donation from '../sections/Donation/Donation';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/OtherBlogs/Blogs';
import Description from '../sections/Description/Descriptions';
import Footer from '../sections/Footer/Footer';
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
            <Navbar />
            <Banner />
            <div style={designStyle}>
                <Description />
                <Blogs />
            </div>
            <div div style={design2Style}>
                <Donation />
            </div>
            <Footer />
        </>
    );
};

export default Home;