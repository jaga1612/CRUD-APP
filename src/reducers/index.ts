import { combineReducers } from "redux";

const users = (state = [], action: any) => {
  if (action.type === "USERS") return [...action.payload];
  return state;
};

const posts = (state = [], action: any) => {
  if (action.type === "POSTS") return [...action.payload];
  return state;
};

export default combineReducers({
  users: users,
  posts: posts,
});
