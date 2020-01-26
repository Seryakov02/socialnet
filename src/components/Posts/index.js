import React from "react";
import { reduxForm, Field } from "redux-form";

import { required, maxLengthCreator } from "../../utils/validate";
import { Textarea } from "../../common/FormsControls";
import PostItem from "./PostItem";
import { styleBtn } from "../../common/FormsControls";

const maxLength10 = maxLengthCreator(10);

const Posts = props => {
  let postItem = props.posts.map(post => (
    <PostItem
      message={post.message}
      key={post.id}
      id={post.id}
      deletePost={props.deletePost}
    />
  ));

  const addNewPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h2>My Posts</h2>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div style={{ marginTop: "20px" }}>{postItem}</div>
    </div>
  );
};

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        validate={[required, maxLength10]}
      />
      <button style={styleBtn}>Add post</button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "addPostForm" })(AddPostForm);

export default Posts;
