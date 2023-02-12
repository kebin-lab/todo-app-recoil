import { useTodoList } from "../recoil/TodoListState";
import { Item } from "../types/todo";

type Props = {
  item: Item;
};

export const TodoItem = ({ item }: Props) => {
  const { getIndex, deleteTodoItem, editTodoItem } = useTodoList();

  const index = getIndex(item.id);
  const toggleItemCompletion = () => {
    editTodoItem(index, { ...item, isComplate: !item.isComplate });
  };
  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTodoItem(index, { ...item, text: e.target.value });
  };
  const deleteItem = () => {
    deleteTodoItem(index);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplate}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
