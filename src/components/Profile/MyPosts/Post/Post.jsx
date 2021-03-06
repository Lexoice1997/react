import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img src='https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg' />
                {props.message}
            </div>
        </div>
    )
}

export default Post;