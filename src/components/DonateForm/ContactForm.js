import React, { useState } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import axios from 'axios';

const ContactForm = () => {

    const [formData , setFormData] = useState({
        name: '',
        donationType: 'Money', // default value
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lks-server.onrender.com/send-email', formData);
            console.log(response.data);

            // Reset form after successful submission

            setFormData({
                name: '',
                donationType: 'Money',
                email: '',
                number: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Type of Donation</label>
                        <select name='donationType' class="form-control" value={formData.donationType} onChange={handleChange}>
                            <option>Money</option>
                            <option>Necessities</option>
                            <option>Foods</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" name='email' class="form-control" placeholder="Enter email address" value={formData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Contact Number</label>
                        <input type="text" name='number' class="form-control" placeholder="Enter phone number" value={formData.number} onChange={handleChange}/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Message</label>
                        <textarea class="form-control" name='message' placeholder='Enter' rows="3" value={formData.message} onChange={handleChange}></textarea>
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