import React from 'react';
import UserIcon from '../../assets/images/image-avatar.png';
import { Typography } from '@mui/material';
import './styles.css';

function UserInfo() {
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("role");

    return (
        <div className="user">
            <div className="info">
                <Typography variant="body1" fontWeight="bold" className="name">{userName}</Typography>
                <Typography className="role">{userRole}</Typography>
            </div>
            <div className="photo-wrapper">
                <img src={UserIcon} alt="User profile photo" />
            </div>
        </div>
    );
}

export default UserInfo;