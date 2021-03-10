import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <div className={style.navbar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to="/messages" activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={style.active}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink></li>
                <li><NavLink to="/Friends" activeClassName={style.active}>
                    <h3>Friends</h3>

                </NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;