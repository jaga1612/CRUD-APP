import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { post, user } from "../modal";
import SinglePost from "./Singlepost";

interface props {
  posts: post[];
  users: user[];
}

const RenderList: React.FC<props> = ({ posts, users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        dispatch({ type: "USERS", payload: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((data) => {
        dispatch({ type: "POSTS", payload: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  const renderPost = () => {
    if (!posts) return null;

    return posts.map((post) => (
      <SinglePost key={post.id} post={post} users={users} />
    ));
  };

  return (
    <ul data-testid="list" className="mui-list--unstyled ">
      {renderPost()}
    </ul>
  );
};

const mapStateToProps = (state: { users: user[]; posts: post[] }) => {
  return { users: state.users, posts: state.posts };
};

export default connect(mapStateToProps)(RenderList);
