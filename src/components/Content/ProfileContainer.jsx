import React from "react";
import Content from "./Content";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../components/Redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data.items);
      });
  }
  render() {
    return <Content {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
