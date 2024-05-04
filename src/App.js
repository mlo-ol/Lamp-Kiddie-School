import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Testimonials from './pages/Testimonials/Testimonials';
import Admin from './pages/AdminPages/Admin';
import AdminGallery from './pages/AdminPages/AdminGallery';
import AdminBlogs from './pages/AdminPages/AdminBlogs';
import AdminTestimonials from './pages/AdminPages/AdminTestimonials';

import Login from './pages/Login/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin-gallery" element={<AdminGallery />} />
      <Route path="/admin-blogs" element={<AdminBlogs />} />
      <Route path="/admin-testimonials" element={<AdminTestimonials />} />
      
    </Routes>
  );
}

export default App;
