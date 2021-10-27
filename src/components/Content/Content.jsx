import React from "react";
import styles from "./Content.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import Post from "./Myposts/post/Post";
import ProfileInfo from "./ProfileInfo";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer store={props.store} />
      <Post />
    </div>
  );
};
export default Content;
