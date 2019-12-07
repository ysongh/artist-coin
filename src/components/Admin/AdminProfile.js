import React from 'react';

import AdminSideDrawer from './AdminSideDrawer';

const AdminProfile = () => {
    return(
        <div className="dashboard">
            <AdminSideDrawer />
            <div className="adminProfile">
                <h2>Admin Profile</h2>
            </div>
        </div>
    );
};

export default AdminProfile;