import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={style.item}>
            <span className={style.img}><img src='https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg' /></span>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;
