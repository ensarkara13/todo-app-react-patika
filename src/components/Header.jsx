import { nanoid } from "nanoid";
import { useState } from "react";

const Header = ({ setTodoList }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      setTodoList((prev) => [
        { id: nanoid(), todo: input, completed: false },
        ...prev,
      ]);
    }
    setInput("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="todo"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
