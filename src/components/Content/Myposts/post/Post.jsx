import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.lak}>
            <img src="https://a.deviantart.net/avatars/r/o/roanovel.png?5" alt="" />
            {props.message}
        </div>
    )
}
export default Post;