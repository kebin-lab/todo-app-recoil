import { atom } from "recoil";
import { Filter } from "../types/todo";
import { RecoilAtomKeys } from "./RecoilKeys";

// export const todoListState = atom<Array<Item>>({
//   key: RecoilAtomKeys.TODOLIST,
//   default: [],
// });

export const todoListFilterState = atom<Filter>({
  key: RecoilAtomKeys.TODOLIST_FILTER,
  default: "Show All",
});
