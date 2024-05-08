import React, { useEffect, useState } from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';
import axios from "axios";


const Footer = () => {
    const [aboutInfo, setAboutInfo] = useState(null);

    useEffect(() => {
        getInfo(); 
    }, []);

    const getInfo = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getAbout');

            setAboutInfo(res.data.About);
            
        } catch(error) {
            console.error(error);
        }
    }


    const footerMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Testimonials',
            path: '/testimonials',
        },
        {
            name: 'Gallery',
            path: '/gallery',
        },
        {
            name: 'Blogs',
            path: '/blogs',
        }
    ];

    const footerContacts = aboutInfo ? [
        {
            'title': 'Phone Number',
            'info': `+63 ${aboutInfo.phoneNumber.replace(/^0+/, '')}`,
            'icon': call
        },
        {
            'title': 'For interest in donating:',
            'info': `${aboutInfo.email}`,
            'icon': time
        },
        {
            'title': 'Address',
            'info': `${aboutInfo.address}`,
            'icon': location
        }
    ] : [];

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        {aboutInfo && <p>{aboutInfo.schoolDescription}</p>}
                        

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href= {aboutInfo && aboutInfo.facebook}><FaFacebookF /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to={singleMenu.path}>{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return <div className="contact-list">
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