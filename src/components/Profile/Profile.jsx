import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className="img">
                <img src="https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg" alt="" />
            </div>

            <div className="posts">
                <div className="ava">
                    ava + description
                </div>

                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;