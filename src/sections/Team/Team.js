import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/lks/Faculty/Director Gloria F. Gaa.png';
import imgTwo from '../../assets/lks/Faculty/Teacher Delia F. Fajutagana.png';
import imgThree from '../../assets/lks/Faculty/Teacher Geraldine M. De la Cruz.png';
import imgFour from '../../assets/lks/Faculty/Teacher Judy Ann M. Mariano.png';
import imgFive from '../../assets/lks/Faculty/Teacher Maricel M. Falcutila.png';
import imgSix from '../../assets/lks/Faculty/Teacher Ria Ann M. Falsado.png';
import team from '../../assets/about/vision-mission/container3.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Director Gloria F. Gaa'
        },
        {
            'img': imgTwo,
            'name': 'Teacher Delia F. Fajutagana'
        },
        {
            'img': imgThree,
            'name': 'Teacher Geraldine M. De la Cruz'
        },
        {
            'img': imgFour,
            'name': 'Teacher Judy Ann M. Mariano.png'
        },
        {
            'img': imgFive,
            'name': 'Teacher Maricel M. Falcutila'
        },
        {
            'img': imgSix,
            'name': 'Teacher Ria Ann M. Falsado'
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