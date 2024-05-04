import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Testimonials',
            path: '/testimonials',
        },
        {
            name: 'Blogs',
            path: '/blogs',
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '+088 123 654 987',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '09:00 AM - 18:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': '35 West Dental Street California 1004',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Dental Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;