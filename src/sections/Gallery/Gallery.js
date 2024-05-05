import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/lks/13.jpg';
import imgTwo from '../../assets/lks/14.jpg';
import imgThree from '../../assets/lks/15.jpg';
import imgFour from '../../assets/lks/16.jpg';
import imgFive from '../../assets/lks/17.jpg';
import imgSix from '../../assets/lks/18.jpg';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Gallery"
                    title="Capturing Moments & Inspiring Minds of Lamp Kiddie School"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgOne} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;