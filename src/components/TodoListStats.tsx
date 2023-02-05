import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selectors";

export const TodoListStats = () => {
  const {
    todoListNum,
    todoListComplatedNum,
    todoListUncomplatedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  return (
    <>
      <ul>
        <li>Total items: {todoListNum}</li>
        <li>Items completed: {todoListComplatedNum}</li>
        <li>Items not completed: {todoListUncomplatedNum}</li>
        <li>Percent completed: {Math.round(percentCompleted)}%</li>
      </ul>
    </>
  );
};
