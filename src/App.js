import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;
