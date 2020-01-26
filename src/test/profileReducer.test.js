import profileReducer from "../store/reducers/profileReducer";
import { addPost, deletePost } from "../store/actions/profileActions";

const state = {
  posts: [
    { id: 1, message: "Test" },
    { id: 2, message: "Test" }
  ]
};

it("length of posts should be incremented", () => {
  let action = addPost("Added");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});
