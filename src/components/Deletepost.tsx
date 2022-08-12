import Modal from "../ModalWindow";
import { useParams } from "react-router-dom";
import history from "../history";

const DeletePost: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const cancelDelete = () => {
    history.push("/");
  };

  const coinfirmDelete = () => {
    const deletePost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          {
            method: "DELETE",
          }
        );
        console.log(res);
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    deletePost();
  };

  return (
    <Modal
      tittle={"Delete Post"}
      body={"Are You Sure Want To Delete Post ?"}
      firstButton={"Cancel"}
      secondButton={"Delete"}
      onClickFirstButton={cancelDelete}
      onclickSecondButton={coinfirmDelete}
    />
  );
};

export default DeletePost;
