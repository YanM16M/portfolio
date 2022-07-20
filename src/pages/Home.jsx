import React from 'react';
import '../styles/Home.css';

function Home() {
    return ( 
        <div className="home_container">
            <div className="presentation">
                <span>Yanis Martinon</span>
                <span>Mastère Big Data à l'IPSSI</span>
            </div>
            <div className="content">
                <div className="left_side">
                    <div className="a_propos">
                        <h4>A propos de moi</h4>
                        <p>Salut ! </p>
                    </div>
                    <div className="experience">
                        <h4>Expériences</h4>
                        <div className="content_category">
                            <div className='content_group'>
                                <img class="logo" src="https://cdn-icons-png.flaticon.com/512/1/1975.png" alt="" />
                                <span>5 ans</span>
                            </div>
                            <div className='content_group'>
                                <img class="logo" src="https://cdn-icons-png.flaticon.com/512/45/45082.png" alt="" />
                                <span>5 ans</span>
                            </div>
                            <div className='content_group'>
                                <img class="logo" src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt="" />
                                <span>5 ans</span>
                            </div>
                            <div className='content_group'>
                                <img class="logo" src="https://cdn-icons-png.flaticon.com/512/888/888847.png" alt="" />
                                <span>5 ans</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="picture_container">

                    </div>
                </div>
                
                <div className="right_side">
                    <div className="services">
                        <h4>Services</h4>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="center">
                    <h1>Cursus</h1>
                    <div className="cursus">
                        <span>Bac STI2D</span>
                        <div className="transition">
                            <div className="point"/>
                            <div className="line"/>
                            <div className="point"/>
                        </div>
                        <span>DUT Informatique</span>
                        <div className="transition">
                            <div className="point"/>
                            <div className="line"/>
                            <div className="point"/>
                        </div>
                        <span>Mastère Big Data</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;