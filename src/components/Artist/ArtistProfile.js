import React from 'react';

import ArtistSideDrawer from './ArtistSideDrawer';

const ArtistProfile = () => {
    return(
        <div className="dashboard">
            <ArtistSideDrawer />
            <div className="artistProfile">
                <h2>Artist Profile</h2>
            </div>
        </div>
    );
};

export default ArtistProfile;