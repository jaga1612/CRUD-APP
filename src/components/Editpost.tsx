import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { post, user } from "../modal";
import Form from "./Form";
import history from "../history";

interface props {
  posts: post[];
}

const EditPost: React.FC<props> = ({ posts }) => {
  const { id } = useParams();

  const toEditPost = posts.find((post) => post.id === Number(id));

  const editPostSubmit = (title: string, body: string) => {
    async function updatePost() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              id: id,
              title: title,
              body: body,
              userId: toEditPost?.userId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
    updatePost();
  };

  if (toEditPost) {
    return (
      <Form
        title={toEditPost.title}
        body={toEditPost.body}
        onSubmit={editPostSubmit}
      />
    );
  } else return null;
};

const mapStateToProps = (state: { users: user[]; posts: post[] }) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(EditPost);
