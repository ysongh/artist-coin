import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div>
            <h1>Artist Coin</h1>
            <Link to="/dashboard/artist">DashBoard</Link>
        </div>
    );
};

export default Landing;