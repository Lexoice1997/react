import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/News">News</a></li>
                <li><a href="/Music">Music</a></li>
                <li><a href="/Settings">Settings</a></li>
            </ul>
        </div>
    )
}

export default Navbar;