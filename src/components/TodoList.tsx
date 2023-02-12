import { todoSelectors } from "../recoil/TodoListState";

import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilter } from "./TodoListFilter";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  const { useFilteredTodos } = todoSelectors;
  const todoList = useFilteredTodos();

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
