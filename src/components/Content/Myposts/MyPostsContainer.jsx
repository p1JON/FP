import Myposts from './Myposts.jsx'
import { connect } from 'react-redux'
import { addPostActionCreator } from '../../Redux/profile-reducer'
import { updateNewPostActionCreator } from '../../Redux/profile-reducer'

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MyPostsContainer;