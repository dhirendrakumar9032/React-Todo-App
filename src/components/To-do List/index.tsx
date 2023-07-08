import React, { useState } from "react";
import "./index.css";
import { Button } from "antd";
import { ToDoItem } from "../To-do Items";
import { LOADIPHLPAPI } from "dns";
import { log } from "console";

const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<any>([]); //

  const handleChange = (e: any) => {
    setInputText(e.target.value);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // Random 5-digit number

    const uniqueId = `${timestamp}-${randomNum}`;
    return uniqueId;
  };

  const handleAdd = () => {
    setTodos([
      ...todos,
      {
        isCompted: false,
        todo: inputText,
        id: generateUniqueId(),
      },
    ]);
    setInputText("");
  };

  const hanldeCompleteAll = () => {
    const newTodods = todos.map((todo: any) => ({ ...todo, isCompted: true }));
    setTodos(newTodods);
  };

  const hanldeDeleteAll = () => {
    setTodos([]);
  };

  const handleDelete = (id: string) => {
    const newTodods = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodods);
  };
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
        <button onClick={handleAdd}>Add </button>
      </section>
      <section className="filter-btn">
        <Button onClick={hanldeCompleteAll}>Complete All Task</Button>
        <Button onClick={hanldeDeleteAll}>Delete To-Do Items</Button>
      </section>
      <section className="to-do-items">
        {todos?.map((todo: any) => (
          <ToDoItem todo={todo} handleDelete={handleDelete} />
        ))}
      </section>
      <section className="footer">
        <Button>Filter</Button>
        <h5>Completed:</h5>
        <p>Total Task: {todos.length}</p>
      </section>
    </div>
  );
};

export default ToDoList;
