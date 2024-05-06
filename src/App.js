import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import BlogsPage from './pages/BlogsPage';
import Gallery from './pages/Gallery';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Testimonials from './pages/Testimonials/Testimonials';
import Admin from './pages/AdminPages/Admin';
import AdminGallery from './pages/AdminPages/AdminGallery';
import AdminBlogs from './pages/AdminPages/AdminBlogs';
import AdminTestimonials from './pages/AdminPages/AdminTestimonials';
import Login from './pages/Login/Login';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:url" element={<SingleBlog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-gallery" element={<AdminGallery />} />
        <Route path="/admin-blogs" element={<AdminBlogs />} />
        <Route path="/admin-testimonials" element={<AdminTestimonials />} />
      </Routes>
    </div>
  );
}

export default App;
