import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms";
import { Filter } from "../types/todo";

export const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Filter);
  };
  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
