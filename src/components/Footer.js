import { useRef } from "react";

const Footer = ({ list, setList, todoList, setTodoList }) => {
  const spanAll = useRef(null);
  const spanActive = useRef(null);
  const spanCompleted = useRef(null);

  const handleAll = () => {
    setList(todoList);
    spanAll.current.classList.add("selected");
    spanActive.current.classList.remove("selected");
    spanCompleted.current.classList.remove("selected");
  };

  const handleActive = () => {
    const tempList = todoList.filter(
      (todoItem) => todoItem.completed === false
    );
    setList(tempList);
    spanActive.current.classList.add("selected");
    spanAll.current.classList.remove("selected");
    spanCompleted.current.classList.remove("selected");
  };

  const handleCompleted = () => {
    const tempList = todoList.filter((todoItem) => todoItem.completed === true);
    setList(tempList);
    spanCompleted.current.classList.add("selected");
    spanAll.current.classList.remove("selected");
    spanActive.current.classList.remove("selected");
  };

  const clearCompleted = () => {
    const tempList = todoList.filter(
      (todoItem) => todoItem.completed === false
    );
    setTodoList(tempList);
    spanCompleted.current.classList.remove("selected");
    spanAll.current.classList.remove("selected");
    spanActive.current.classList.remove("selected");
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <b>{list.length}</b> items left
      </span>

      <ul className="filters">
        <li>
          <span onClick={handleAll} ref={spanAll}>
            All
          </span>
        </li>
        <li>
          <span onClick={handleActive} ref={spanActive}>
            Active
          </span>
        </li>
        <li>
          <span onClick={handleCompleted} ref={spanCompleted}>
            Completed
          </span>
        </li>
      </ul>

      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
