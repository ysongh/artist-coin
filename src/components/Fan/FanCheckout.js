import React, { Component } from 'react';

import FanSideDrawer from './FanSideDrawer';

class FanCheckout extends Component{
    render(){
        return(
            <div className="dashboard">
                <FanSideDrawer />
                <div className="fanProfile">
                    <h2>Shopping Cart</h2>
                    <p><strong>Artist</strong>: Taylor Swift</p>

                    <table className="fanProfile__table">
                        <tr>
                            <th>Product Name</th>
                            <th>Coins</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Concert</td>
                            <td>20</td>
                            <td>
                                It is a music
                            </td>
                        </tr>
                        <tr>
                            <td>CD</td>
                            <td>10</td>
                            <td>
                                It is a music
                            </td>
                        </tr>
                        <tr>
                            <td>Concert</td>
                            <td>20</td>
                            <td>
                                It is a music
                            </td>
                        </tr>
                    </table>

                    <div>
                        <button className="fanProfile__btn-add">Buy</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default FanCheckout;