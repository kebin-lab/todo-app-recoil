import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { getId } from "../utils/Id";

export const TodoItemCreator = () => {
  const [input, setInput] = useState("");
  const [, setTodoList] = useRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: input, isComplate: false },
    ]);
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
