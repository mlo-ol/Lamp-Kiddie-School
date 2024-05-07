import React from 'react';
import './TestimonialForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import axios from 'axios';

const ContactForm = () => {

    const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
        const name = e.target.name.value;
        const applicantType = e.target.applicantType.value;
        const email = e.target.email.value;
        const contactNumber = e.target.contactNumber.value;
        const text = e.target.text.value;

        const testimonialData = {
        name,
        applicantType,
        email,
        contactNumber,
        text,
        };

        const response = await axios.post('https://lks-server.onrender.com/uploadTestimonial', testimonialData);
        if (response.status === 201) { 
        console.log('Testimonial submitted successfully!');
    
        } else {
        console.error('Error submitting testimonial:', response.data);
        }
    } catch (error) {
        console.error('Error submitting testimonial:', error);
    }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name='name' class="form-control" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>I am a/an</label>
                        <select name='applicantType' class="form-control">
                            <option value='Alum'>Alumni</option>
                            <option value='Parent'>Parent</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" name='email' class="form-control" placeholder="Enter email address" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Contact Number</label>
                        <input type="text" name='contactNumber' class="form-control" placeholder="Enter phone number" />
                    </div>
                </div>
                
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Testinomial</label>
                        <textarea class="form-control" name='text' placeholder='Enter your story' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Submit</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Lamp Kiddie School</p>
                            <h6>+63 9123456789</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;