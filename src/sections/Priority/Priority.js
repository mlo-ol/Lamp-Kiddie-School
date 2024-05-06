import React from 'react';
// import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
// import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {/* <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text" data-aos="fade-up" data-aos-duration="2000">
                            <SectionTitle 
                                subTitle="ABOUT US" 
                                title="Get to know the Lamp Kiddie School!"
                                // description="Includes the Vision and Mission, History, and Faculty."
                            />

                            {/* <div className="theme-btn">
                                <Link to='/'>Book an appointment</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;