import type { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void; // ← コールバックの型付け
  onDelete: (id: number) => void; // ← 完了済みの削除
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      {todo.done && <button onClick={() => onDelete(todo.id)}>削除</button>}
    </li>
  );
}

export default TodoItem;
