import React from 'react';

import UserImage from '../../img/taylorSwift.jpeg';

const ArtistSideDrawer = () => {
    return(
        <div className="artistSideDrawer">
            <img src={UserImage} alt="Artist" className="artistSideDrawer__img"/>
            <p>Taylor Swift</p>
        </div>
    );
};

export default ArtistSideDrawer;