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
        console.log(aboutInfo.email);
    }, []);

    const getInfo = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getAbout');

            setAboutInfo(res.data.About[0]);
            
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

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '09300432427',
            'icon': call
        },
        {
            'title': 'For interest in donating:',
            'info': 'sample@email.com',
            'icon': time
        },
        {
            'title': 'Address',
            'info': 'Calatrava, Romblon, Philippines',
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
                        <p>A mission, non-profit, non-sectarian early childhood educational institution committed to train and develop children spiritually, mentally, physically and socially for God's glory.</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/https://web.facebook.com/groups/653752085377264/?_rdc=1&_rdr"><FaFacebookF /></a></li>
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