import React, { useEffect, useState } from "react";

const initialValues = { todo: "", completed: false };

const Header = ({ todoList, setTodoList }) => {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [todoList]);

  const formHandler = (e) => {
    setForm({ todo: e.target.value, completed: false });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.todo !== "") {
      const doesInclude = todoList.some(
        (item) => item.todo.toLowerCase() === form.todo.toLowerCase()
      );

      if (!doesInclude) setTodoList([...todoList, form]);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="todo"
          value={form.todo}
          onChange={formHandler}
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
