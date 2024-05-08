import React, { useEffect, useState } from 'react';
import './Faculty.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/lks/Faculty/Director Gloria F. Gaa (2).png';
import imgTwo from '../../assets/lks/Faculty/Principal Delia F. Fajutagana (2).png';
import imgThree from '../../assets/lks/Faculty/Teacher Geraldine M. De la Cruz.png';
import imgFour from '../../assets/lks/Faculty/Teacher Judy Ann M. Mariano.png';
import imgFive from '../../assets/lks/Faculty/Teacher Maricel M. Falcutila.png';
import imgSix from '../../assets/lks/Faculty/Teacher Ria Ann M. Falsado.png';
import team from '../../assets/about/vision-mission/container3.png';
import axios from 'axios';

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchFaculty();
    }, []);

    const fetchFaculty = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/get/faculty');
            const data = res.data.allFaculty;
            console.log(data);
            setTeams(data);
        } catch (error) {
            console.error(error);
        }
    };

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
                            Kiddie School Faculty!"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Step into the magical world of learning! Welcome to the land of bright minds and shining futures, where our faculty members aren't just teachers – they're illuminators of knowledge! 🌟</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.image} alt="" />
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