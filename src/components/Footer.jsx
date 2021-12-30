import { useState } from "react";

const Footer = ({ setFilteredList, todoList, setTodoList }) => {
  const [button, setButton] = useState("");

  const activeTodoListLength = todoList.filter(
    (todoItem) => todoItem.completed === false
  ).length;

  const clearCompleted = () => {
    const filtered = todoList.filter(
      (todoItem) => todoItem.completed === false
    );
    setTodoList(filtered);
  };

  const filterList = (filterButton) => {
    if (filterButton === "all") {
      setFilteredList(todoList);
    } else if (filterButton === "active") {
      const filtered = todoList.filter((item) => item.completed === false);
      setFilteredList(filtered);
    } else if (filterButton === "completed") {
      const filtered = todoList.filter((item) => item.completed === true);
      setFilteredList(filtered);
    }
    setButton(filterButton);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <b>{activeTodoListLength}</b> incompleted item
        {activeTodoListLength > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <span
            className={button === "all" ? "selected" : ""}
            onClick={() => filterList("all")}
          >
            All
          </span>
        </li>
        <li>
          <span
            className={button === "active" ? "selected" : ""}
            onClick={() => filterList("active")}
          >
            Active
          </span>
        </li>
        <li>
          <span
            className={button === "completed" ? "selected" : ""}
            onClick={() => filterList("completed")}
          >
            Completed
          </span>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
