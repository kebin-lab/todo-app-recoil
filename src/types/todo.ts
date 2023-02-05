export type Item = {
  id: number;
  text: string;
  isComplate: boolean;
};

export type Filter = "Show All" | "Show Completed" | "Show Uncompleted";

export type TodoListStats = {
  todoListNum: number;
  todoListComplatedNum: number;
  todoListUncomplatedNum: number;
  percentCompleted: number;
};
