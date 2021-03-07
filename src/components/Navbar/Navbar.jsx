import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to="/messages" activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={style.active}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;