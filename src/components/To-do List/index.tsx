import React, { useEffect, useState } from "react";
import "./index.css";
import { Button } from "antd";
import { ToDoItem } from "../To-do Items";
import { Todo } from "../../utils/interface";
import { generateUniqueId } from "../../utils/helper";

const ToDoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTask, setCompletedTask] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      isCompleted: false,
      todo: inputText,
      id: generateUniqueId(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputText("");
  };

  const handleCompleteAll = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, isCompleted: true }));
    setTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const totalCompleted = todos.filter((todo) => todo.isCompleted);
    setCompletedTask(totalCompleted.length);
  }, [todos]);

  return (
    <div className="to-do-list">
      <h1>To-do List</h1>
      <section className="input-field">
        <input
          type="text"
          placeholder="add to do "
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </section>
      <section className="filter-btn">
        <Button onClick={handleCompleteAll}>Complete All Task</Button>
        <Button onClick={handleDeleteAll}>Delete To-Do Items</Button>
      </section>
      <section className="to-do-items">
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </section>
      <section className="footer">
        <Button>Filter</Button>
        <h5>Completed:{completedTask}</h5>
        <p>Total Task: {todos.length}</p>
      </section>
    </div>
  );
};

export default ToDoList;
