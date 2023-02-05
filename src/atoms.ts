import { atom } from "recoil";
import { Filter, Item } from "./types/todo";

export const textState = atom({
  key: "textState",
  default: "",
});

export const todoListState = atom<Array<Item>>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<Filter>({
  key: "TodoListFilter",
  default: "Show All",
});
