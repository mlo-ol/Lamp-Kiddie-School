import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const SingleBlog = () => {

    const {url} = useParams();
    const blog = BlogData.find(blog => blog.url === url);
    const {title, img} = blog;

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                                <main className="single-blog-area">
                                <p className="single-blog-category">
                                    TECHNOLOGY
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner"/>
                                <p className="single-blog-text">The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures. Typical properties of resin systems are described, and the range of conditions encountered in practice and the development of a wide range of epoxy systems for a variety of applications are discussed. Several applications such as surface and underwater repairs, and the use of epoxy resins as curing membranes, and to seal cracks and joints are described in detail. It is shown that careful selection of materials and good quality of workmanship are essential to derive the maximum benefit from the use of epoxy systems. A wide range of properties could be obtained from epoxies to suit the requirements of the designer and the contractor.

                                To this day, it’s not entirely clear which seven lines the article referenced. The prevailing theory is that it’s the roughly seven lines of curl it took to create a Charge. However, a search for the seven lines of code ultimately misses the point: the ability to open up a terminal, run this curl snippet, then immediately see a successful credit card payment felt like seven lines of code. It’s unlikely that a developer believed a production-ready payments integration involved literally only seven lines of code. But taking something as complex as credit card processing and reducing.</p>

                                <p className='single-blog-text'>A few years ago, Bloomberg Businessweek published a feature story on Stripe. Four words spanned the center of the cover: “seven lines of code,” suggesting that’s all it took for a business to power payments on Stripe. The assertion was bold—and became a theme and meme for us.

                                To this day, it’s not entirely clear which seven lines the article referenced. The prevailing theory is that it’s the roughly seven lines of curl it took to create a Charge. However, a search for the seven lines of code ultimately misses the point: the ability to open up a terminal, run this curl snippet, then immediately see a successful credit card payment felt like seven lines of code. It’s unlikely that a developer believed a production-ready payments integration involved literally only seven lines of code. But taking something as complex as credit card processing and reducing the integration to only a few lines of code that, when run, immediately returns a successful Charge object is really quite magical</p>

                                <blockquote className='single-post-quote'>“ Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor ”</blockquote>

                                <p className="single-blog-text">The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures. Typical properties of resin systems are described, and the range of conditions encountered in practice and the development of a wide range of epoxy systems for a variety of applications are discussed. Several applications such as surface and underwater repairs, and the use of epoxy resins as curing membranes, and to seal cracks and joints are described in detail. It is shown that careful selection of materials and good quality of workmanship are essential to derive the maximum benefit from the use of epoxy systems. A wide range of properties could be obtained from epoxies to suit the requirements of the designer and the contractor.

                                To this day, it’s not entirely clear which seven lines the article referenced. The prevailing theory is that it’s the roughly seven lines of curl it took to create a Charge. However, a search for the seven lines of code ultimately misses the point: the ability to open up a terminal, run this curl snippet, then immediately see a successful credit card payment felt like seven lines of code. It’s unlikely that a developer believed a production-ready payments integration involved literally only seven lines of code. But taking something as complex as credit card processing and reducing.</p>
                            </main>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Get Latest Updates</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Subscribe to email'/>
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categories</h3>
                                    <ul>
                                        <li><Link href="/">Technology</Link></li>
                                        <li><Link href="/">Root Canal</Link></li>
                                        <li><Link href="/">Teeth</Link></li>
                                        <li><Link href="/">Whitening</Link></li>
                                        <li><Link href="/">Dentures</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SingleBlog;