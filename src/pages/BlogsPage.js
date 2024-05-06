import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Blogs from '../sections/Blogs/Blogs';
import Footer from '../sections/Footer/Footer';

const BlogsPage = () => {
    
    return (
        <>
            <Navbar />
            <section className='pb-70' data-aos="fade-up" data-aos-duration="2000">
                <Blogs />
            </section>
            <Footer />
        </>
    );
};

export default BlogsPage;