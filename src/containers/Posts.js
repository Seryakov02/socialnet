import Posts from "../components/Posts";
import { connect } from "react-redux";

import { addPost, deletePost } from "../store/actions/profileActions";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

export default connect(mapStateToProps, { addPost, deletePost })(Posts);
