import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>I am a/an</label>
                        <select class="form-control">
                            <option>Alumni</option>
                            <option>Parent</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Contact Number</label>
                        <input type="email" class="form-control" placeholder="Enter phone number" />
                    </div>
                </div>
                
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Message</label>
                        <textarea class="form-control" placeholder='Enter your story' rows="3"></textarea>
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