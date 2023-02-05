import { selector } from "recoil";
import { textState, todoListFilterState, todoListState } from "./atoms";
import { Item, TodoListStats } from "./types/todo";

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const filteredTodoListState = selector<Array<Item>>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(todoListFilterState);
    switch (filter) {
      case "Show Completed":
        return todoList.filter((element) => element.isComplate === true);
      case "Show Uncompleted":
        return todoList.filter((element) => element.isComplate === false);
      default:
        return todoList;
    }
  },
});

export const todoListStatsState = selector<TodoListStats>({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const todoListNum = todoList.length;
    const todoListComplatedNum = todoList.filter(
      (element) => element.isComplate
    ).length;
    const todoListUncomplatedNum = todoListNum - todoListComplatedNum;
    const percentCompleted =
      todoListNum !== 0 ? (todoListComplatedNum / todoListNum) * 100 : 0;
    return {
      todoListNum,
      todoListComplatedNum,
      todoListUncomplatedNum,
      percentCompleted,
    };
  },
});
