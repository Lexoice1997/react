import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.item}>
            <Post message='Hello Everyone'/>
            <Post message='My name Azamat'/>
            <Post message='I love React'/>
            <Post message='And I love JS'/>
        </div>
    )
}

export default MyPosts;