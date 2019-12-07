import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../img/land-image.png';

const Landing = () => {
    return(
        <div className="landing">
            <header className="landing__hero">
                <img src={Image} alt="Landing" />
                <div className="landing__header">
                    <h1>Connect with your favorite artist & get reward</h1>
                    <div className="landing__searchBar">
                        <input placeholder="Search for Artist" />
                        <Link to="/dashboard/artist" className="landing__btn">Search</Link>
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
            </main>
        </div>
    );
};

export default Landing;