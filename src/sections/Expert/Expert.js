import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="Welcome!"
                                title="Lamp Kiddie School"
                                description="A mission, non-profit, non-sectarian early childhood educational institution committed to train and develop children spiritually, mentally, physically and socially for God's glory."
                            />
                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Top quality dental team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    State of the art dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Discount on all dental treatment
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;