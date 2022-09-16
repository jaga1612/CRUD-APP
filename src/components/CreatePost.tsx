import Form from "./Form";
import history from "../history";

const CreatPost: React.FC = () => {
  const newPostSubmit = (title: string, body: string) => {
    const postrequest = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 11,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        history.push("/");
      } catch (err) {
        console.log(err);
        console.log("hello");
      }
    };
    postrequest();
  };

  return <Form title="" body="" onSubmit={newPostSubmit} />;
};
export default CreatPost;
