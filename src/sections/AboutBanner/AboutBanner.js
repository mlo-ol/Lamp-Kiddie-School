import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/lks/3.jpg';
import bannerTwo from '../../assets/lks/4.jpg';
import bannerThree from '../../assets/lks/5.jpg';
import bannerFour from '../../assets/lks/6.jpg';
import container1 from '../../assets/about/vision-mission/container1.png';
// import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    const container1Style = {
        backgroundImage: `url(${container1})`, // Use multiple backgrounds
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'top',
    };

    return (
        <section className='about-section'>
            <div className="d-table">
                <div className="d-table-cell back" style={container1Style}>
                    <div className="container" data-aos="fade-up" data-aos-duration="2000">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Vision</h2>
                                    <p>Foundational Christian values formation and academic excellence.</p>

                                    {/* <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner" />
                                    <img src={bannerTwo} alt="about banner two" />
                                    {/* <img className='pattern' src={pattern} alt="about banner two" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-duration="2000">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerThree} alt="about banner" />
                                    <img src={bannerFour} alt="about banner two" />
                                    {/* <img className='pattern' src={pattern} alt="about banner two" /> */}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Mission</h2>
                                    <p>Holistic early childhood education for 3, 4 & 5 years old towards community transformation and development.</p>

                                    {/* <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;