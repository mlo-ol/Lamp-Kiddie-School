import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';
import imgFour from '../../assets/about/team/4.png';
import team from '../../assets/about/vision-mission/container3.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dianne Russell'
        },
        {
            'img': imgTwo,
            'name': 'Esther Howard'
        },
        {
            'img': imgThree,
            'name': 'Darrell Steward'
        },
        {
            'img': imgFour,
            'name': 'Jenny Wilson'
        },
        {
            'img': imgOne,
            'name': 'Dianne Russell'
        },
        {
            'img': imgTwo,
            'name': 'Esther Howard'
        },
        {
            'img': imgThree,
            'name': 'Darrell Steward'
        },
        {
            'img': imgFour,
            'name': 'Jenny Wilson'
        }
    ]

    const teamsStyle = {
        backgroundImage: `url(${team})`, // Use multiple backgrounds
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
    };

    return (
        <section className='team-section pt-100 pb-70' style={teamsStyle}>
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet the Teachers"
                            title="Get to know the Lamp 
                            Kiddie School Faculty"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;