import React from 'react';

import ArtistSideDrawer from './ArtistSideDrawer';

const ArtistProfile = () => {
    return(
        <div className="dashboard">
            <ArtistSideDrawer />
            <div className="artistProfile">
                <h2>Songs</h2>
                <hr></hr>
                <br></br>
                <h3>Ready for it</h3>
                <h3>22</h3>
                <h3>breathless</h3>
                <h3>Cold as you</h3>
                <h3>Cruel Summer</h3>
                <h3>Crazier</h3>
                <h3>Breathelss</h3>
                <h3>I knew you were trouble</h3>
                <h3>I forgot that you existed</h3>    
                <h3>You need to calm down</h3>
            </div>
        </div>
    );
};

export default ArtistProfile;