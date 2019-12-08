import React from 'react';

import ArtistSideDrawer from '../Artist/ArtistSideDrawer';

const AdminProfile = () => {
    return(
        <div className="dashboard">
            <ArtistSideDrawer />
            <div className="fanProfile">
                <h2>DashBoard</h2>
                <p><strong>Ethereum</strong>: #32312312312311</p>
                <p><strong>Available Coins</strong>: 100</p>

                <div className="adminProfile__group">
                    <button>Create Coins</button>
                    <button>Send Coins</button>
                    <button>Burn Coins</button>
                    <button>Fan List</button>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;