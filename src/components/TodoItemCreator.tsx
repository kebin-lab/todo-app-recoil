import { useState } from "react";
import { useTodoList } from "../recoil/TodoListState";

export const TodoItemCreator = () => {
  const [input, setInput] = useState("");
  const { addTodoList } = useTodoList();

  const addItem = () => {
    addTodoList(input);
    setInput("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
};
