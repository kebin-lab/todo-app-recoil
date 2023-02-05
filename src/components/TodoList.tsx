import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilter } from "./TodoListFilter";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
