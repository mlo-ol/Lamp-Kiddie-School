import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../sections/Footer/Footer';
import Gallery from '../../sections/Gallery/Gallery';
import Testimonial from '../../sections/Testimonial/Testimonial';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Testimonials.scss';
// import Symptoms from '../sections/Symptoms/Symptoms';
// import Appointment from '../sections/Appointment/Appointment';

const Testimonials = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Submit Your Testimonial"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            
            <Gallery />
            <Testimonial/>
            {/* <Symptoms /> */}
            {/* <Appointment /> */}
            <Footer />
        </>
    );
};

export default Testimonials;