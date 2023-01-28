import React from "react";

function List({ todo, setTodo, status }) {
  const onChangeList = (id) => {
    setTodo((todo) =>
      todo.map((todoItem) =>
        todoItem === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };

  const deleteButton = (e) => {
    setTodo(todo.filter((item) => item.id !== e.id));
  };

  const isComplated = (e) => {
    if (e.isCompleted === true && status === "All") {
      return "completed";
    } else if (e.isCompleted === true && status === "Active") {
      return "completed hidden";
    } else if (e.isCompleted === false && status === "Completed") {
      return "hidden";
    }
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todo.map((todoItem) => (
            <li key={todoItem.id} className={isComplated(todoItem)}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  value={todoItem.isCompleted}
                  onChange={() => onChangeList(todoItem)}
                />
                <label className={`${todoItem.isCompleted ? "completed" : ""}`}>
                  {todoItem.form}
                </label>
                <button
                  className="destroy"
                  onClick={() => deleteButton(todoItem)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
