import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Blogs.scss';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogData from './BlogData';

const Blogs = () => {

    return (
        <section className='pt-100 pb-70 blog-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="Blogs"
                    title="Stay updated with our latest news!"
                    description='Step into our virtual campus hub, where learning meets expression! Every click sparks curiosity and every read fuels inspiration.'
                />
                <div className="row">
                    {
                        BlogData.map(blog => <BlogCard blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;