import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsItem =
        props.posts.map(sms => <Post message={sms}/>)

    return (
        <div className={style.item}>
            {postsItem}
        </div>
    )
}

export default MyPosts;