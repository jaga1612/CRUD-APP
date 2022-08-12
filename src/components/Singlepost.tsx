import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { post, user } from "../modal";

interface props {
  post: post;
  users: user[];
}

const SinglePost: React.FC<props> = ({ post, users }) => {
  const printUserName = (userId: number) => {
    if (!users) return "unknown";
    const user = users?.find((user) => user.id === userId);
    return user?.name;
  };
  return (
    <li className="mui--divider-bottom">
      <h1 style={{ textDecoration: "underline", fontWeight: "bold" }}>
        {printUserName(post.userId)}{" "}
        <span>
          <Link
            to={`delete/${post.id}`}
            className="mui-btn mui-btn--danger mui--pull-right"
          >
            Delete
          </Link>
          <Link
            to={`/edit/${post.id}`}
            className="mui-btn mui-btn--primary mui--pull-right"
          >
            Edit
          </Link>
        </span>
      </h1>
      <h2 style={{ fontWeight: "bold" }}>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  );
};

const mapStateToProps = (state: { users: user[]; posts: post[] }) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(SinglePost);
