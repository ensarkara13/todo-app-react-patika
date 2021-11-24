const List = ({ list, todoList, setTodoList }) => {
  const deleteTodo = (key) => {
    const tempList = todoList.filter((todoItem) => todoItem.todo !== key);
    setTodoList(tempList);
  };

  const checkIt = (item) => {
    const tempList = todoList.filter(({ todo }) => todo !== item);
    const completedTodo = todoList.find(({ todo }) => todo === item);
    completedTodo.completed = true;

    setTodoList([...tempList, completedTodo]);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {list.length > 0 &&
          list.map((todoItem, index) => {
            return (
              <li key={index}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onClick={() => checkIt(todoItem.todo)}
                  />
                  <label>{todoItem.todo}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTodo(todoItem.todo)}
                  ></button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default List;
