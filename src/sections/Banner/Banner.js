import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    return (
        <section className='banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Lamp Kiddie School</h1>
                                    <p>"Train up a child in a way he should go, and when he is old he will not depart from it." ~ Proverbs 22:6</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/about">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className='info-box'>
                                    </div>
                                    <div className="shapes">
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;