import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png'
import bannerTwo from '../../assets/about/banner/banner_2.png'
import container1 from '../../assets/about/vision-mission/container1.png'
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
                                    <p>We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</p>

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
                                    <img src={bannerOne} alt="about banner" />
                                    <img src={bannerTwo} alt="about banner two" />
                                    {/* <img className='pattern' src={pattern} alt="about banner two" /> */}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Mission</h2>
                                    <p>We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</p>

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