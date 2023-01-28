import { useState } from "react";
import Form from "../form/Form";
import List from "../list/List";
import Button from "../button/Button";
import Footer from "../footer/Footer";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form todo={todo} setTodo={setTodo} />
        </header>
        <List todo={todo} setTodo={setTodo} status={status} />
        <Button todo={todo} setTodo={setTodo} setStatus={setStatus} />
      </section>
      <Footer />
    </div>
  );
}

export default Todo;
