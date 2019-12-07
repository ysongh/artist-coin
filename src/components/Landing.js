import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div>
            <h1>Artist Coin</h1>
            <Link to="/dashboard/artist">Artist</Link>
            <br />
            <Link to="/dashboard/fan">Fan</Link>
        </div>
    );
};

export default Landing;