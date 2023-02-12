import { todoSelectors } from "../recoil/TodoListState";

export const TodoListStats = () => {
  const { useTodoStats } = todoSelectors;
  const {
    todoListNum,
    todoListComplatedNum,
    todoListUncomplatedNum,
    percentCompleted,
  } = useTodoStats();

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
