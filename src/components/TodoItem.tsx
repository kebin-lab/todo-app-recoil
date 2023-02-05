import { useRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { Item } from "../types/todo";

type Props = {
  item: Item;
};

export const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((element) => element.id === item.id);
  const toggleItemCompletion = () => {
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplate: !item.isComplate,
    });
    console.log(newTodoList);
    setTodoList(newTodoList);
  };
  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    console.log(newTodoList);
    setTodoList(newTodoList);
  };
  const deleteItem = () => {
    const newTodoList = removeItemAtIndex(todoList, index);
    setTodoList(newTodoList);
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

function replaceItemAtIndex(arr: Array<Item>, index: number, newValue: Item) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Array<Item>, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
