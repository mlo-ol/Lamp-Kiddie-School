import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../sections/Footer/Footer';
import BlogCard from '../components/BlogCard/BlogCard';
import BlogData from '../sections/Blogs/BlogData';

const BlogsPage = () => {
    
    return (
        <>
            <Navbar />
            <PageTitle />
            <section className='pb-70' data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        {
                            BlogData.map(blog => <BlogCard blog={blog} />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogsPage;