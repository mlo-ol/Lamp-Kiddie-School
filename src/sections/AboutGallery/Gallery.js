import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
// import imgOne from '../../assets/lks/7.jpg';
// import imgTwo from '../../assets/lks/8.jpg';
// import imgThree from '../../assets/lks/9.jpg';
// import imgFour from '../../assets/lks/10.jpg';
// import imgFive from '../../assets/lks/11.jpg';
// import imgSix from '../../assets/lks/12.jpg';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                {/* <SectionTitle 
                    subTitle="Gallery"
                    title="Some proof about our services for you"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                /> */}
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img1">
                            {/* <img src={imgOne} alt="gallery" /> */}
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img2">
                            {/* <img src={imgTwo} alt="gallery" /> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img3">
                            {/* <img src={imgThree} alt="gallery" /> */}
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img4">
                            {/* <img src={imgFour} alt="gallery" /> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img5">
                            {/* <img src={imgFive} alt="gallery" /> */}
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img6">
                            {/* <img src={imgSix} alt="gallery" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;