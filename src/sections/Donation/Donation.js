import React from 'react';
import './Donation.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/DonateForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed/v1/place?q=Lamp+Kiddie+School+(Calatrava,+Pob.),+M+Roxas+St,+Poblacion,+Calatrava,+Romblon,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Lamp Kiddie School (Calatrava, Pob.), M Roxas St, Poblacion, Calatrava, Romblon, Philippines</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle
                                subTitle="Donation"
                                title="Gift of Hope: A Call to Donate"
                                description="“Every man shall give as he is able, according to the blessing of the LORD your God that he has given you.” ~Deuteronomy 16:17, ESV" />

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;