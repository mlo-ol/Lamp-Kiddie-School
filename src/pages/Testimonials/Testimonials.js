import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../sections/Footer/Footer';
import AlumnusTestimonial from '../../sections/AlumnusTestimonial/Testimonial';
import ParentsTestimonial from '../../sections/ParentsTestimonial/Testimonial';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimonialForm from '../../components/TestimonialForm/TestimonialForm';
import './Testimonials.scss';

const Testimonials = () => {
    return (
        <>
            <Navbar />
            <div className='testimonial'>
                <AlumnusTestimonial />
                <ParentsTestimonial />
                <section className='contact-section' data-aos="fade-up" data-aos-duration="2000">
                    <SectionTitle
                        title="Submit Your Testimonial"
                        description="Its your time to share your experience!"
                    />
                    <section className='contact-form-area'>
                        <TestimonialForm />
                    </section>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Testimonials;