import { useState } from "react";

interface props {
  title: string;
  body: string;
  onSubmit: (title: string, body: string) => void;
}

const Form: React.FC<props> = ({ title, body, onSubmit }) => {
  const [postTitle, setPostTitle] = useState<string>(title);
  const [postBody, setPostBody] = useState<string>(body);

  const actionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(postTitle, postBody);
  };

  return (
    <form
      className="mui-form"
      onSubmit={(e) => {
        actionSubmit(e);
      }}
    >
      <legend>Enter Your Post</legend>
      <div className="mui-textfield">
        <input
          autoFocus
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
          type="text"
          required
        />
        <label>Title</label>
      </div>
      <div className="mui-textfield">
        <input
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value);
          }}
          type="text"
          required
        />
        <label>Comment</label>
      </div>
      <button type="submit" className="mui-btn mui-btn--primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
