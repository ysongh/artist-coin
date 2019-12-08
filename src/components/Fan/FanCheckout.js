import React, { Component } from 'react';

import FanSideDrawer from './FanSideDrawer';
import ConfrimModal from './ConfrimModal';

class FanCheckout extends Component{
    state = {
        showModal: false
    };

    closeModal(){
        this.setState({ showModal: false});
    }

    render(){
        return(
            <div className="dashboard">
                <FanSideDrawer />
                <div className="fanProfile">
                    <h2>Shopping Cart</h2>
                    <p><strong>Artist</strong>: Taylor Swift</p>

                    <table className="fanProfile__table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Coins</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>

                    <div>
                        <button className="fanProfile__btn-add" onClick={() => this.setState({ showModal: true })}>Buy</button>
                    </div>
                </div>
                {this.state.showModal ? <ConfrimModal closeModal={() => this.closeModal()} /> : null }
            </div>
        );
    };
};

export default FanCheckout;