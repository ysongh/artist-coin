import React from 'react';

import FanSideDrawer from './FanSideDrawer';

const FanProfile = () => {
    return(
        <div className="dashboard">
            <FanSideDrawer />
            <div className="fanProfile">
                <h2>Fan Profile</h2>
            </div>
        </div>
    );
};

export default FanProfile;