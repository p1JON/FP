import React from 'react'
import mp from './Myposts.module.css'
import Post from './post/Post.jsx'

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} />);

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();

    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            my posts
            <div className={mp.clr}>
                <input ref={newPostElement} type="text" onChange={onPostChange} />
                <button onClick={onAddPost} value={props.newPostText}>Add</button>
                <button>Remove</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;