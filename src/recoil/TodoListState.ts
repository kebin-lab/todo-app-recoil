import { useCallback } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Item, TodoListStats } from "../types/todo";
import { getId } from "../utils/Id";
import { todoListFilterState } from "./atoms";
import { RecoilAtomKeys, RecoilSelectorKeys } from "./RecoilKeys";

const todoListState = atom<Array<Item>>({
  key: RecoilAtomKeys.TODOLIST,
  default: [],
});

function replaceItemAtIndex(arr: Array<Item>, index: number, newValue: Item) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Array<Item>, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const getIndex = useCallback(
    (id: number) => {
      return todoList.findIndex((todo) => todo.id === id);
    },
    [todoList]
  );

  const addTodoList = useCallback(
    (input: string) => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        { id: getId(), text: input, isComplate: false },
      ]);
    },
    [setTodoList]
  );

  const deleteTodoItem = useCallback((index: number) => {
    console.log("call deleteTodoItem");
    setTodoList((oldTodoList) => removeItemAtIndex(oldTodoList, index));
  }, []);

  const editTodoItem = useCallback(
    (index: number, newItem: Item) => {
      console.log("call edit Todo Item");
      setTodoList((oldTodoList) =>
        replaceItemAtIndex(oldTodoList, index, newItem)
      );
    },
    [setTodoList]
  );

  return { getIndex, addTodoList, deleteTodoItem, editTodoItem };
};

const filteredTodoListState = selector<Array<Item>>({
  key: RecoilSelectorKeys.FILTER_TODOLIST,
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
const todoListStatsState = selector<TodoListStats>({
  key: RecoilSelectorKeys.TODOLIST_STATS,
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

export const todoSelectors = {
  useFilteredTodos: () => useRecoilValue(filteredTodoListState),
  useTodoStats: () => useRecoilValue(todoListStatsState),
};
