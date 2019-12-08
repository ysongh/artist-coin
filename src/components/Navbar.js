import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/artnation.png';

const Navbar = () => {
    return(
        <nav>
            <div className="nav">
            <Link to="/">
                <img src={Logo} alt="Logo" className="nav__logo" />
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/about" className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to="/dashboard/admin" className="nav__link">Artist</Link>
                </li>
                <li className="nav__item">
                    <Link to="/dashboard/fan" className="nav__link">Fan</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar; 