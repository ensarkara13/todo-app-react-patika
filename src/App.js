import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setList([...todoList]);
  }, [todoList]);

  return (
    <>
      <section className="todoapp">
        <Header todoList={todoList} setTodoList={setTodoList} />
        <List list={list} todoList={todoList} setTodoList={setTodoList} />
        <Footer
          list={list}
          todoList={todoList}
          setList={setList}
          setTodoList={setTodoList}
        />
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
