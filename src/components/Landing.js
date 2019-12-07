import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../img/land-image.png';

const Landing = () => {
    return(
        <div className="landing">
            <h1>Artist Coin</h1>
            <div className="landing__hero">
                <img src={Image} alt="Landing" />
                <div className="landing__header">
                    <h1>Connect with your favorite artist & get reward</h1>
                    <div className="landing__searchBar">
                        <input placeholder="Search for Artist" />
                        <Link to="/dashboard/artist" className="landing__btn">Search</Link>
                    </div>
                    
                </div>
            </div>
            <Link to="/dashboard/admin">Admin</Link>
            <br />
            <Link to="/dashboard/fan">Fan</Link>
        </div>
    );
};

export default Landing;