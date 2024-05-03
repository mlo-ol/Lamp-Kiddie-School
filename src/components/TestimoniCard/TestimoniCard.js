import React from 'react';
import './TestimoniCard.scss';

const TestimoniCard = ({testimonail}) => {

    const {img, name, description, ratings} = testimonail;
   
    return (
        <div className='col-lg-4 single-testimoni'>
            <div className="testimonial-card">
                <div className="testimonial-img">
                    <img src={img} alt="testimonial" />
                </div>
                <div className="testimonial-text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <ul className='testimonial-rating'>
                    {
                        ratings?.map (rating => <li>{rating}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default TestimoniCard;