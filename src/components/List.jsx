import { useEffect, useState } from "react";
import Footer from "./Footer";

const List = ({ todoList, setTodoList }) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => setFilteredList(todoList), [todoList]);

  const handleToggle = (id) => {
    const item = todoList.find((todoItem) => todoItem.id === id);
    item.completed = !item.completed;
    setTodoList([...todoList]);
  };

  const deleteTodo = (id) => {
    const filtered = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(filtered);
  };

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredList.length > 0 &&
            filteredList.map(({ id, todo, completed }) => {
              return (
                <li key={id} className={completed ? "completed" : ""}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={completed}
                      onChange={() => handleToggle(id)}
                    />
                    <label>{todo}</label>
                    <button
                      className="destroy"
                      onClick={() => deleteTodo(id)}
                    ></button>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <Footer
        todoList={todoList}
        setTodoList={setTodoList}
        setFilteredList={setFilteredList}
      />
    </>
  );
};

export default List;
