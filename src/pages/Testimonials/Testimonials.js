import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../sections/Footer/Footer';
import Gallery from '../../sections/Gallery/Gallery';
import AlumnusTestimonial from '../../sections/AlumnusTestimonial/Testimonial';
import ParentsTestimonial from '../../sections/ParentsTestimonial/Testimonial';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Testimonials.scss';
// import Symptoms from '../sections/Symptoms/Symptoms';
// import Appointment from '../sections/Appointment/Appointment';

const Testimonials = () => {
    return (
        <>
            <Gallery />
            <AlumnusTestimonial/>
            <ParentsTestimonial/>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Submit Your Testimonial"
                    description="Its your time to share your experience!"
                />
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            </section>
            {/* <Symptoms /> */}
            {/* <Appointment /> */}
            <Footer />
        </>
    );
};

export default Testimonials;