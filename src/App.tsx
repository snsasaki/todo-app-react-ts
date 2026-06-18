import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, handleAdd, handleToggle, handleDelete } = useTodos();

  return (
    <div>
      <h1>Todoアプリ react-ts</h1>
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
