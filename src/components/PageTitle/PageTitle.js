import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title,description}) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>Blogs</h2>
                <p>Stay updated with our latest blog and news.</p>
            </div>
        </div> 
    );
};

export default PageTitle;