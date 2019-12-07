import React from 'react';

import UserImage from '../../img/taylorSwift.jpeg';

const AdminSideDrawer = () => {
    return(
        <div className="adminSideDrawer">
            <img src={UserImage} alt="Admin" className="adminSideDrawer__img"/>
            <p>Taylor Swift</p>
        </div>
    );
};

export default AdminSideDrawer;