import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  debugger;

  return (
    <div className={styles.content}>
      <div>
        <img
          className={styles.mount}
          src="https://yt3.ggpht.com/ytc/AAUvwnj0msUsUwlqLTqfr4j9jfoA961BM5z58Mx5uWDa=s900-c-k-c0x00ffffff-no-rj "
          alt=""
        />
      </div>
      <div>
        <img src={props.profile.photos.large} />
        ava and description
      </div>
    </div>
  );
};
export default ProfileInfo;
