import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AboutBanner.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="ABOUT US" 
                                title="Get to know the Lamp Kiddie School!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;