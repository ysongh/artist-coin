import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/artnation.png';
import Image from '../img/land-image.png';
import PersonImage1 from '../img/artist.jpeg';
import PersonImage2 from '../img/fans.jpeg';

const Landing = () => {
    return(
        <div className="landing">
            <header className="landing__hero">
                <img src={Image} alt="Landing" />
                <div className="landing__header">
                    <h1>Connect with your favorite artist & get reward</h1>
                    <div className="landing__searchBar">
                        <input placeholder="Search for Artist" />
                        <Link to="/dashboard/artist" className="landing__btn"><i className="fas fa-search"></i></Link>
                    </div>
                </div>
            </header>

            <main>
                <div className="landing__icon-group">
                    <div className="landing__icon-box">
                        <i className="fas fa-music"></i>
                        <p>Music for Artists and Fans</p>
                    </div>
                    <div className="landing__icon-box">
                        <i className="fas fa-globe-americas"></i>
                        <p>Connect with the World</p>
                    </div>
                    <div className="landing__icon-box">
                        <i className="fas fa-child"></i>
                        <p>Be Art Nation</p>
                    </div>
                </div>

                <div className="landing__auth">
                    <img src={PersonImage1} alt="Person 1" />
                    <div className="landing__auth-text">
                        <p>Are you an artist?</p>
                        <Link to="/dashboard/admin" className="landing__auth-btn">Sign Up</Link>
                    </div>
                    
                    <img src={PersonImage2} alt="Person 2" />
                    <div className="landing__auth-text">
                        <p>Are you a fan?</p>
                        <Link to="/dashboard/fan" className="landing__auth-btn">Sign Up</Link>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <img src={Logo} alt="Logo" />

                <div className="footer__links">
                    <p><strong>Home</strong></p>
                    <p>Artist</p>
                    <p>Fan</p>
                </div>

                <div className="footer__links">
                    <p><strong>About</strong></p>
                    <p>Career</p>
                    <p>FAQs</p>
                    <p>Terms and Conditions</p>
                </div>

                <p className="footer__copyright">&copy; 2019 Artnation</p>
            </footer >
        </div>
    );
};

export default Landing;