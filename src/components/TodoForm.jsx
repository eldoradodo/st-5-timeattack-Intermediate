import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용 모두 입력해주세요.");
      return;
    }

    dispatch(
      addTodo({
        id: uuidv4(),
        title: title,
        content: content,
      })
    );

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
