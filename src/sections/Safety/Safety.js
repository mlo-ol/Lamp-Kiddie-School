import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import history from '../../assets/about/vision-mission/container2.png';
import Gallery from '../AboutGallery/Gallery';

const Safety = () => {
    const historyStyle = {
        backgroundImage: `url(${history})`, // Use multiple backgrounds
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
    };
    return (
        <section className='safty-section pt-80 pb-100' style={historyStyle}> {/* section-bg section-common */}
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <Gallery />
                {/* <div className="safety-video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/f4jG8BCl5s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div> */}
                <div className='history'>
                <SectionTitle 
                    // subTitle="Safety"
                    title="Our History"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    "
                />
                </div>
            </div>
        </section>
    );
};

export default Safety;