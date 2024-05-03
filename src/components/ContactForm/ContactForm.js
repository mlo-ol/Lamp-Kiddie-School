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
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Department</label>
                        <select class="form-control">
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Dental 24H Emergency</p>
                            <h6>03 482 394 123</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;