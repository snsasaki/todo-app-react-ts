import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleChange}
        placeholder="Todo を入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
