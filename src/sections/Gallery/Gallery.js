import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/lks/13.jpg';
import imgTwo from '../../assets/lks/14.jpg';
import imgThree from '../../assets/lks/15.jpg';
import imgFour from '../../assets/lks/16.jpg';
import imgFive from '../../assets/lks/17.jpg';
import imgSix from '../../assets/lks/18.jpg';
import axios from 'axios';

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        fetchPhotoLinks();
    }, [])

    const fetchPhotoLinks = async () => {
        try {
            const response = await axios.get('https://lks-server.onrender.com/get/photo');
            setGalleryImages(response.data.Photos || []);
        } catch (error) {
            console.error('Error fetching photo links:', error);
            
        }
    };

    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Gallery"
                    title="Capturing Moments of Lamp Kiddie School"
                    description='"And I commend joy, for man has nothing better under the sun but to eat and drink and be joyful, for this will go with him in his toil through the days of his life that God has given him under the sun."
                    ~Ecclesiastes 8:15'
                />
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[0]?.link} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[1]?.link} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[2]?.link} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[3]?.link} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[4]?.link} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={galleryImages[5]?.link} alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;