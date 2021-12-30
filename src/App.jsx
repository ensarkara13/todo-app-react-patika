import { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

const getTodoList = () => {
  return JSON.parse(localStorage.getItem("todolist")) || [];
};

function App() {
  const [todoList, setTodoList] = useState(getTodoList());

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <section className="todoapp">
        <Header setTodoList={setTodoList} />
        <List todoList={todoList} setTodoList={setTodoList} />
      </section>
      <footer className="info">
        <p>
          Designed by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
