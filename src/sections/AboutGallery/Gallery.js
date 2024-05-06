import React from 'react';
import './Gallery.scss';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img1">
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img2">
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img3">
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img4">
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img5">
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img6">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;