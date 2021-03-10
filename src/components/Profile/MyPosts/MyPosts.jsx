import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.newPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newPostText(text);
    }

    let postsItem =
        props.posts.map(sms => <Post message={sms.message} id={sms.id} likesCount={sms.likesCount}/>)

    return (
        <div className={style.item}>
            <div className="ava">
                ava + description

                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newP}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Push</button>
                </div>
            </div>

            {postsItem}
        </div>
    )
}

export default MyPosts;