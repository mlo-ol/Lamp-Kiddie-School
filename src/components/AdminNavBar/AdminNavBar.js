import React from 'react';
import './AdminNavBar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';


const AdminNavbar = () => {

    const navbarItems = [
        {
            name: 'Home',
            path: '/admin',
        },
        {
            name: 'Gallery',
            path: '/admin-gallery',
        },
        {
            name: 'Testimonials',
            path: '/admin-testimonials',
        },
        {
            name: 'Blogs',
            path: '/admin-blogs',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/admin">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <Link to="/">Logout</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AdminNavbar;