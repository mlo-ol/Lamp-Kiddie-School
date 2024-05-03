import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({blog}) => {
    const {title, img, description, category,url} = blog;

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={img} alt="blog"/>
                    <div className="date">
                        <h6>23</h6>
                        <p>Jan</p>
                    </div>
                </div>
                <div className="blog-text">
                    <span><Link to="/">{category}</Link></span>
                    <h3><Link to={`/blog/${url}`}>{title}</Link></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;