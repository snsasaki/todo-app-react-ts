import { useState } from "react";
import TodoForm from "./components/TodoForm";
import type { Todo } from "./types/Todo";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>型付き Todo アプリ</h1>
      {/* onAdd の型は (text: string) => void ← TodoForm の Props と一致 */}
      <TodoForm onAdd={handleAdd} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <p>残り: {todos.filter((t) => !t.done).length} 件</p>
    </div>
  );
}

export default App;
