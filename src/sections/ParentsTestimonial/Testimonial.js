import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'name': 'Robert Fox',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Albert Flores',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Bessie Cooper',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Kuromi',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Cinnamoroll',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Hello Kitty',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Keroppi',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-common section-bg pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="What the Parents have said about LKS"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.” ~Luke 6:38</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;