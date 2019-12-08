import React from 'react';
import { Link } from 'react-router-dom';

import FanSideDrawer from './FanSideDrawer';

const FanProfile = () => {
    return(
        <div className="dashboard">
            <FanSideDrawer />
            <div className="fanProfile">
                <h2>DashBoard</h2>
                <p><strong>Ethereum</strong>: #32312312312311</p>
                <p><strong>Email</strong>: joedoe@mail.com</p>
                <p><strong>Available Coins</strong>: 100</p>

                <table className="fanProfile__table">
                    <tr>
                        <th>Artist Name</th>
                        <th>Coins</th>
                        <th>Add</th>
                    </tr>
                    <tr>
                        <td>Taylor Swift</td>
                        <td>10</td>
                        <th>
                            <Link to="/dashboard/fan/checkout" className="fanProfile__button">Add</Link>
                        </th>
                    </tr>
                    <tr>
                        <td>Shakia</td>
                        <td>25</td>
                        <td>
                            <Link to="/dashboard/fan/checkout" className="fanProfile__button">Add</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Maroons</td>
                        <td>5</td>
                        <td>
                            <Link to="/dashboard/fan/checkout" className="fanProfile__button">Add</Link>
                        </td>
                    </tr>
                </table>

                <div>
                    <button className="fanProfile__btn-add">Add More Artist</button>
                </div>
            </div>
        </div>
    );
};

export default FanProfile;