import React from 'react';

import UserImage from '../../img/defaultUser.png';

const FanSideDrawer = () => {
    return(
        <div className="fanSideDrawer">
            <img src={UserImage} alt="Fan" className="fanSideDrawer__img"/>
            <p>Joe Doe</p>
        </div>
    );
};

export default FanSideDrawer;